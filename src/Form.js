import React, { Component } from 'react';
//import { FormErrors } from './FormErrors';
import './Form.css';

//import TextField from "material-ui/TextField";
//import RaisedButton from "material-ui/RaisedButton";
class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {

      FirstName: '',
      FirstNameError: '',
      LastName: '',
      LastNameError: '',
      email: '',
      emailError: "",
      password: '',
      passwordError: "",
      confirmpassword: '',
      confirmpassworderror: ""
      //formErrors: {email: '', password: ''},
      //emailValid: false,
      //passwordValid: false,
      //formValid: false
    }
  }

  Update(e) {
    this.setState({ [e.target.name]: e.target.value })

  }

  validate = () => {
    let iserror = false
    const error = {
      FirstNameError: "",
      LastNameError: "",
      emailError: "",
      passwordError: "",
      confirmpassworderror: ""
    };
    if (this.state.FirstName === "") {
      iserror = true;
      alert("FirstName cannot be empty");
      error.FirstNameError = 'Firstname cannot be empty'
    }

    if (this.state.LastName === "") {
      iserror = true;
      alert("LastName cannot be empty");
      error.FirstNameError = 'Lastname cannot be empty'
    }

    if (this.state.email.indexOf("@") === -1) {
      iserror = true;
      alert("Enter a valid email address");
      error.FirstNameError = 'Enter a valid email id'
    }


    if (this.state.password.length < 5) {
      iserror = true;
      alert("Password should be more than 5 character");
      error.FirstNameError = 'Password should be more than 5 character'
    }

    if (this.state.confirmpassword !== this.state.password) {
      iserror = true;
      alert("Confirm Password and Password are not same");
      error.FirstNameError = 'Confirm Password and Password are not same'
    }


    this.setState({
      ...this.state,
      ...error
    });

    return iserror;
  };


  onsubmit = e => {

    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        FirstName: "",
        FirstNameError: "",
        LastName: "",
        LastNameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        confirmpassword: "",
        confirmpassworderror: ""
      });
      //alert("First name cannot be blank");
      //this.setstate({
      // ...this.state


      //});
    }
  };

  render() {
    return (

      <form >
        <h2>Sign Up</h2>

        <div classname="form-group">
          <label classname="form-control">FirstName :</label>
          <input
            type="text"
            className="form-group"
            name="FirstName" placeholder="FirstName"
            onChange={this.Update.bind(this)}
            errortext={this.state.FirstNameError} floatingLabelFixed
            value={this.state.FirstName}
          />
        </div>
        <br />
        <div classname = "form-group">
          <label style={{display: 'margin-right:10px'}}
          classname="form-control">LastName :</label>
          <input
            type="text"
            className="form-group"
            name="LastName" placeholder="LastName"
            onChange={this.Update.bind(this)}
            errortext={this.state.LastNameError}
            value={this.state.LastName}
          />
        </div>
        <br />
        <div classname ="form-group">
          <label classname="form-control">Email ID:</label>
          <input
            type="text"
            className="form-group"
            name="email" placeholder="Email Address"
            onChange={this.Update.bind(this)}
            errortext={this.state.email}
            value={this.state.email}
            errortext={this.state.email}
          />
        </div>

        <br>
        </br>
        <div classname ="form-group">
          <label htmlFor="password" >Password :</label>
          <input
            type="password"
            className="form-group"
            name="password"
            placeholder="Password"
            onChange={this.Update.bind(this)}
            errortext={this.state.passwordError}
            value={this.state.password}
            errortext={this.state.password}
          />
        </div>
        <br />
        <div classname ="form-group">
          <label htmlFor="password" >Confirm Password :</label>
          <input type="password"
            className="form-group"
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange={this.Update.bind(this)}
            value={this.state.confirmpassword}
            errortext={this.state.confirmpassworderror}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={e => this.onsubmit(e)}>
          Sign Up
            </button>
            
            
      </form>

    )
  }
}

export default Form;
