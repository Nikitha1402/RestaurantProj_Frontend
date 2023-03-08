import React, { Component } from 'react';
import './Login.css';
import axios from 'axios'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fullName:'',
        lastName:'',
        email: '',
        password: ''
        
    };
  }

  handlefullNameChange = (event) => {
    this.setState({ fullName: event.target.value });
  };

  handlelastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleemailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlepasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  
  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        fullName: this.state.fullName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        
      };
    
      axios.post('http://127.0.0.1:8080/post', data)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">FULLNAME</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.fullName}
          onChange={this.handlefullNameChange}
        /><br></br>
        <br></br>

        <label className="sign-label">LASTNAME</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.lastName}
          onChange={this.handlelastNameChange}
        /><br></br>
        <br></br>

        <label className="sign-label">E-MAIL</label>
        <input
          className="sign-input"
          type="email"
          value={this.state.email}
          onChange={this.handleemailChange}
        /><br></br>
        <br></br>
        <label className="login-label">PASSWORD</label>
        <input
          className="login-input"
          type="password"
          value={this.state.password}
          onChange={this.handlepasswordChange}
        /><br></br>
        <br></br>

        
        <button className="login-button" type="submit">
        Login
        </button>
      </form>
    );
  }
}

export default Login;