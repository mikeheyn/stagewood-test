import logo from './logo.svg';
import './App.css';
import Users from './Components/Users/users.js';
import $ from 'jquery'; 

function App() {
  return (
    <div className="bg-dark d-flex flex-column justify-content-between" style={{"minHeight":"100%"}}>
      <div>
        <div className="container py-3 py-xl-4">
          <h4 className="text-center text-light">Submit</h4>
          <div className="mx-auto mt-3 col-xl-5 col-md-7 col-sm-10 card text-dark p-0">
            <form action="/submit" method="post" id="submitForm" encType="multipart/form-data">
              <div className="card-body">
                <div className="form-group row">
                  <label htmlFor="name" className="col-sm-4 col-form-label pr-sm-0">Full Name:</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control bg-light" id="name" name="name"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-4 col-form-label pr-sm-0">Email:</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control bg-light" id="email" name="email"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="user_name" className="col-sm-4 col-form-label pr-sm-0">User Name:</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control bg-light" id="user_name"  name="user_name"/>
                  </div>
                </div>
                <div className="form-group row">
              <label htmlFor="password" className="col-sm-4 col-form-label pr-sm-0">Password:</label>
              <div className="col-sm-8">
                <input type="password" className="form-control" id="password"  name="password" onKeyUp={validatePassword}/>
              </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label pr-sm-0">Re-type password:</label>
                <div className="col-sm-8">
                  <input type="password" className="form-control" id="passwordverification"  name="passwordv" onKeyUp={validatePassword}/>
                  <p id="passwordVerificationMsg" style={{"display": "none"}}>Password's do not match up.</p>
                </div>
              </div>
                <div className="form-group row">
                  <label htmlFor="profile_pic" className="col-sm-4 col-form-label pr-sm-0">Profile Picture:</label>
                  <div className="col-sm-8">
                    <input type="file" id="profile_pic" name="profile_pic" accept="image/png, image/jpeg" className="form-control bg-light"></input>
                  </div>
                </div>
              </div>
              <div className="card-footer mt-2">
                <input type="submit" value="Submit" className="btn btn-primary text-uppercase submit" id="submitButton"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Users/>
    </div>
  );
}

function validatePassword() {
  var form = $('#signupForm');

  var pass1 = $('#password').val();
  var pass2 = $('#passwordverification').val();
  console.log (pass1, pass2);
  if (pass1 == pass2) {
      $('#submitButton').prop('disabled', false);
      $('#passwordVerificationMsg').css('display','none');
      console.log('submitted');
  }
  else
  {
      $('#submitButton').prop('disabled', true);
      var vMsg = $('#passwordVerificationMsg');
      vMsg.css('display','inline');
      vMsg.text('The two passwords do not match up.');
      console.log('error');
  }
}

export default App;
