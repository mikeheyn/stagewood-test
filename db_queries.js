const Database = require('./prisma/Database.js');

var connection = new Database({
  host: 'localhost',
  user: 'root',
  password: '1aAsshole!'
});

async function initialize()
{
  try {
    await connection.query(
      `CREATE DATABASE Stagewood`
    )

    await connection.query(
      `
      CREATE TABLE Stagewood.Users (
        ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        NAME VARCHAR (40),
        USERNAME VARCHAR (20),
        EMAIL VARCHAR (150),
        PASSWORD VARCHAR (20),
        IMG_LOC VARCHAR (150)
      )
      `
    )


    console.log("DB & TABLES CREATED!");
  }
  catch (e)
  {
    console.error(e);
  }
 
}

initialize();