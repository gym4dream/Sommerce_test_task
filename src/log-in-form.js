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

  checkLoginMatch = (e) => {
    let isLoginExists = false;
    let enteredLogin = '';
    const value = e.target.value;

    const users = JSON.parse(localStorage['Users']);
    let logins = [];

    for (let key in users) {
      logins.push(users[key].login)
    }

    logins.forEach((i) => {
      if (i === value) {
        console.log(i)
        enteredLogin = i;
        isLoginExists = true;
        return isLoginExists;
      }

      this.setState({login: enteredLogin})
    })

      console.log(isLoginExists);
      console.log(this.state.login)
    }

  checkPasswordMatch = (e) => {
    let isPasswordExists = false;
    const value = e.target.value;

    const users = JSON.parse(localStorage['Users']);
    let passwords = [];

    for (let key in users) {
      passwords.push(users[key].password)
    }

    passwords.forEach((i) => {
      if (i === value) {
        console.log(i)
        isPasswordExists = true;
        return isPasswordExists;
      }
    })

    console.log(isPasswordExists);
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
                onChange={this.checkLoginMatch}
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
                onChange={this.checkPasswordMatch}
              />
            </div>
            <button type='submit'
              className='btn btn-primary mt-1'
              onClick={this.getUsers}
            >
              Log In
            </button>
          </form>
      </div>
    )
  }
}
