import React, {Component} from 'react';
var ReactDOM = require('react-dom');

export class Users extends Component {
  render() {
    console.log("STATE: " + this.state);
    if(this.state == null)
    return (<div></div>)
    var users = this.state.users;

    console.log("users:" + users);

    return (
      <div>
        {
          users.map((item) => {
            console.log("Item:" + JSON.stringify(item));
            return (<div className="mx-auto mt-3 col-xl-5 col-md-7 col-sm-10 card text-dark p-0">
                      <div className="card-body">
                        <h1>I'm {item.NAME}</h1>
                        <p>User name: {item.USERNAME}</p>
                        <p>Email: {item.EMAIL}</p>
                        <p>Password: You wish!</p>
                        <img src={item.IMG_LOC} class="img-fluid"></img>
                      </div>
                    </div>)
          })
        }
        
      </div>
    )
  }

  constructor(props)
  {
    super(props);
    this.arr = [1,2,3]
  }

  async componentDidMount() {
    fetch('/getUsers')
    .then(resp => resp.json())
    .then(resp => {
      console.log(JSON.stringify(resp))
      this.setState({users: resp});
    });
    //users = users.json();

    // console.log("mounted");

    // console.log("users didmount: " + users);

    // this.setState({ users: users})
  }

  
}

ReactDOM.render(
  <Users/>,
  document.getElementById('root')
);

export default Users;
