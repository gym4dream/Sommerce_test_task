import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default class LogInForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  checkLoginAndPasswordMatch = () => {
    let dataError = false;
    let isLoginAndPasswordCorrect = false;
    const enteredLogin = this.state.login;
    const enteredPassword =  this.state.password;
    console.log(enteredLogin);
    console.log(enteredPassword);
    const users = JSON.parse(localStorage['Users']);

    for (let key in users) {
      if (key === enteredLogin) {
        if (key.password === enteredPassword) {
          isLoginAndPasswordCorrect = true;
          return isLoginAndPasswordCorrect
          break;
        }
      } else {
        dataError = true;
      }
    }
    return dataError;
  }

  render () {
    return (
      <div className='vh-100 row justify-content-center align-items-center'>
          <form className='col-6'>
            <div className='form-group'>
              <label htmlFor="loginInput">Login</label>
              <input type="text"
                name='login'
                required
                className='form-control'
                id='loginInput'
                placeholder='Enter login'
                onChange={this.handleUserInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='loginPasswordInput'>Password</label>
              <input type='password'
                name='password'
                pattern='^(?=.*[a-zA-Z])(?=\w*[0-9])\w{6,16}$'
                className='form-control'
                id='loginPasswordInput'
                placeholder='Password'
                onChange={this.handleUserInput}
              />
            </div>
            <button type='submit'
              className='btn btn-primary mt-1'
              onClick={this.checkLoginAndPasswordMatch}
            >
              Log In
            </button>
          </form>
      </div>
    )
  }
}
