import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      response: ''
    }
  }

  usernameInput(e) {
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }
  emailInput(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }
  passwordInput(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    axios.post('http://mlhq.io:3050/api/users', this.state)
      .then(response => {
        this.setState({
          message: response.data.message
        });
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>Sign Up Page</h1>
              <h1>{this.state.message}</h1>
              <form onSubmit={this.onFormSubmit.bind(this)}>
                <div className="form-group">
                  <label>Username</label>
                  <input className="form-control" onChange={this.usernameInput.bind(this)} />
                </div>
                <div className="form-group">
                  <label>E-Mail</label>
                  <input className="form-control" onChange={this.emailInput.bind(this)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" onChange={this.passwordInput.bind(this)} />
                </div>
                <button className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SignUp;