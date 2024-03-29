import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

function LoginErrorMessage() {
  return <p className='small text-danger'>Login error: entered data is incorrect</p>
}

export default class LogInForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      dataError: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
    console.log(name, value);
  }

  checkLoginAndPasswordMatch = (e) => {
    e.preventDefault()
    let isLoginAndPasswordCorrect = false;
    const enteredLogin = this.state.login;
    const enteredPassword =  this.state.password;
    console.log(enteredLogin);
    console.log(enteredPassword);
    const users = JSON.parse(localStorage['Users']);

    for (let key in users) {
      if (key === enteredLogin) {
        console.log(key)
        if (users[key].password === enteredPassword) {
          isLoginAndPasswordCorrect = true;
          this.setState({dataError: false});
          return isLoginAndPasswordCorrect
        }
      } else {
        this.setState({dataError: true});
        this.setState({password: ''})
      }
    }
  }

  render () {
    return (
      <div className='vh-100 d-flex justify-content-center align-items-center'>
        <form className='col-6'
          onSubmit={this.checkLoginAndPasswordMatch}
        >
        {this.state.dataError && <LoginErrorMessage />}
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
              value={this.state.password}
              onChange={this.handleUserInput}
            />
          </div>
          <button type='submit'
            className='btn btn-primary mt-1'
          >
            Log In
          </button>
        </form>
      </div>
    )
  }
}
