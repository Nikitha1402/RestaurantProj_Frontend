import axios from "axios";
import React, { Component } from "react";
import './getdet.css'

class Getdet extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (<div>


        <div className="fi">
      <table border={2}>
      <thead>
        <tr>
          <th>FULLNAME</th>
          <th>LASTNAME</th>
          <th>EMAIL</th>
          <th>PASSWORD</th>
          
          
         
          


        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr >
            
            <td>{user.fullName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
           
            
            
          </tr>
        ))}
      </tbody>
    </table>
    <button >delete</button>
    </div></div>
    );
  }}
  
export default Getdet;