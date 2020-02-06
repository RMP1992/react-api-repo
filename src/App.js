import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users';




class App extends Component {
  state ={
    users: [],
    loading: false,
  }
  componentDidMount = async () =>{ //if you want to grab data from an Api you should do it inside this function
    //async and await (bellow) is used to make js wait for the data from the api to load before moving to the next line of code
    console.log("Inside of componentDidMount")
    this.setState({
      loading: true,
    })
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    console.log('Before updating the state')
    
    this.setState({
      users: response.data,
      loading: false,
    })
    console.log('After updating the state')
  }
  render() {
    console.log("Inside the Render")
    const allUsers = this.state.users.map( user =>{ //.map is use to loop through the array
      return <h1 key={user.id}>My name is {user.name} and I am from{user.city}</h1>
    });

    // let user2 = ""
    if(this.state.users.length > 0){
      // user2 = this.state.users[1].name // this selects one item from the array as opposed to all of them
    }
    
    return (
      <div>
        <Users loading= {this.state.loading} data={allUsers}/>
      </div>
    )
  }
}


export default App;
