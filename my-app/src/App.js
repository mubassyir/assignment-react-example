import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'
class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0,
    search:[]
  }

  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
  }
  searchUser = (e)=>{
    let key = this.state.search.key
    console.log(key);
    alert(key);
    
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
      let search= this.state.search
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      } else if(e.target.name === "search"){
        search.key = e.target.value;
      }
      this.setState({user})
      this.setState({search});
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        
        <div className="container mrgnbtm">
          {/* Grid slicing style */}
          <div className="row">
            {/* Col-1 */}
            <div className="col-md-8">
                <CreateUser 
                  user={this.state.user}
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser}
                  >
                </CreateUser>
            </div>
            {/* Col-2 */}
            <div className="col-md-4">
                <DisplayBoard
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}
             searchUser={this.searchUser} 
             onChangeForm={this.onChangeForm}   
          ></Users>
        </div>
      </div>
    );
  }
}

export default App;
