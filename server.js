const express = require('express');
const bp = require('body-parser');
const multer = require('multer');
const prismaClient = require('@prisma/client').PrismaClient;
const Database = new (require('./prisma/Database.js'))({
  host: 'localhost',
  user: 'root',
  password: '1aAsshole!',
  database: 'stagewood'
})

var AWS = require("aws-sdk");
AWS.config.loadFromPath('./config/aws_credentials.json');
var AWS_local_config = require('./config/aws_local_config.json');
var S3 = new AWS.S3();

const prisma = new prismaClient();

const app = express();
var cors = require('cors')

app.use(express.static('public'));
app.use(bp.urlencoded({
  extended: true
}))
app.use(cors());

const storage = multer.memoryStorage();
var upload = multer({storage});

app.get('/test', (req, res) => {
  res.send("Working");
});

// app.get('/testDB', async (req, res) => {
//   var res = await Database.query(`SELECT * FROM stagewood.users`);
//   console.log(res);
// })

const type = upload.fields(
  [
    {name: 'profile_pic', maxCount: 1}
  ]
);

app.post('/submit', type, async (req, res) => {
  console.log(req.body);

  // SUPER basic checking to demonstrate concept :) Not comprehensive so that I can make time for other cool features like S3 && display
  let ret = await Database.query(`SELECT * FROM stagewood.users WHERE USERNAME="${req.body.user_name}"`);
  if(ret.length != 0)
  {
    res.send('User name already taken!');
    return;
  }

  if(req.files.profile_pic == undefined)
  {
    res.send("No profile pic!");
    return;
  }

  if(req.body.password != req.body.passwordv)
  {
    res.send("Passwords didn't match!");
    return;
  }


  S3.upload({
    Bucket: AWS_local_config.pic_bucket_name,
    Key: `${req.body.user_name}:profile_pic`,
    Body: req.files.profile_pic[0].buffer,
    ACL:'public-read'
  }, async (err, uploadData) => {
    if(err) {
      console.log("Error", err);
    }
    if(uploadData) {
      console.log("Upload success, location", uploadData.Location);
      console.log("Full:",uploadData);

      // await Database.query(
      //   `INSERT INTO stagewood.users (NAME, USERNAME, EMAIL, PASSWORD, IMG_LOC)
      //   VALUES ("${req.body.name}","${req.body.user_name}","${req.body.email}","${req.body.password}", "${data.Location}")`
      // )

      await prisma.users.create({
        data: {
          NAME: req.body.name,
          USERNAME: req.body.user_name,
          EMAIL: req.body.email,
          PASSWORD: req.body.password,
          IMG_LOC: uploadData.Location
        }
      })
    }

    res.send("success!");
  })
});

app.get('/getUsers', async (req, res) => {
  try {
    allUsers = await prisma.users.findMany(
      {
        select:
        {
          NAME: true,
          USERNAME: true,
          EMAIL: true,
          IMG_LOC: true,
          PASSWORD: false
        }
      }
    )
  }
  catch(e)
  {
    console.error(e);
  }

  res.json(allUsers);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));