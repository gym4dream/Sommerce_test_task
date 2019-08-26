import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { FormErrors } from './form-errors';

export default class CheckInForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      isPasswordsMatch: false,
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                  () => { this.validateField(name, value)})
                  console.log({[name]: value});
  }

  checkPasswordsMatch() {
    console.log({
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
    return this.state.password === this.state.confirmPassword;
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
      case 'confirmPassword':
        passwordValid = value.length >= 6 && value.length <= 16 && this.checkPasswordsMatch();
        fieldValidationErrors.password = passwordValid ? '': ' incorrect';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid});
  }

  addNewUserInDB = () => {
    let userName = this.state.login;
    let users = JSON.parse(localStorage.getItem('Users'));
    if (!users) {
      users = {}
    }
    if (!users[userName]) {
      users[userName] = {
        login: this.state.login,
        email: this.state.email,
        password: this.state.password
      }
      localStorage.setItem('Users', JSON.stringify(users));
    }
  }

  render () {
    return (
      <div className='vh-100 row justify-content-center align-items-center'>
          <form className='col-6 col-lg-3'>
            <div className='form-group'>
              <label htmlFor="loginInput">Login</label>
              <div className="small panel panel-default text-danger">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
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
              <label htmlFor="emailInput">Email</label>
              <input type="email"
                name='email'
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className='form-control'
                id='emailInput'
                placeholder='example@gmail.com'
                value={this.state.email}
                onChange={this.handleUserInput}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='passwordInput'>Password</label>
              <input type='password'
                name='password'
                pattern='^(?=.*[a-zA-Z])(?=\w*[0-9])\w{6,16}$'
                className='form-control'
                id='passwordInput'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleUserInput}
              />
              <small id="emailHelp" className='form-text text-muted'>Numbers and letters from 6 to 16 characters. One letter and one number is required.</small>
            </div>
            <div className='form-group'>
              <label htmlFor='passwordCheckInput'>Confirm password</label>
              <input type='password'
                name='confirmPassword'
                pattern='^(?=.*[a-zA-Z])(?=\w*[0-9])\w{6,16}$'
                className='form-control'
                id='passwordCheckInput'
                placeholder='Password'
                value={this.state.confirmPassword}
                onChange={this.handleUserInput}
              />
            </div>
            <div className='form-check'>
              <input type='checkbox'
                name='agree'
                required
                className='form-check-input'
                id='agree'
              />
              <label className='form-check-label' htmlFor='agree'>Agree</label>
            </div>
            <button type='submit'
              className='btn btn-primary mt-1'
              disabled={!(this.state.emailValid && this.state.passwordValid)}
              onClick={this.addNewUserInDB}>
              Submit
            </button>
          </form>
      </div>
    )
  };
}
