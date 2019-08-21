import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default class App extends React.Component {
  render () {
    return (
      <div className='h-100 container-fluid'>
        <div className='vh-100 row justify-content-center align-items-center'>
          <div className='h-50 border border-primary rounded col-9 col-md-4 bg-light justify-content-center align-items-center row'>
            <button className='btn btn-primary m-1'>
              Log in
            </button>
            <button className='btn btn-primary m-1'>
              Check in
            </button>
          </div>
        </div>
      </div>
    )
  }
};
