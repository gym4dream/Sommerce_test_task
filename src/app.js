import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import CheckInForm from './check-in-form';
import LogInForm from './log-in-form';

export default class App extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='vh-100 justify-content-center align-items-center'>
          <ul className="nav nav-tabs mb-3 justify-content-center" id="tabs-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href='' id="tabs-checkin-tab" data-toggle="tab" role="tab" aria-controls="pills-checkin" aria-selected="true">Check In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=''>Log In</a>
            </li>
          </ul>
          <div className="tab-content" id="tabs-tabContent">
            <div className="tab-pane fade show active"
              id="tabs-checkin"
              role="tabpanel"
              aria-labelledby="tabs-checkin-tab"
            >
              <CheckInForm />
            </div>
            <div className="tab-pane fade"
              id="tabs-profile"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab"
            >
              <LogInForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
