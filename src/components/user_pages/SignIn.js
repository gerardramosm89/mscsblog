import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>Sign In Page</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="col-6">
              <div className="form-group">
                <label>
                  <input 
                  onChange={(e) => this.setState({ username: e.target.value })} className="form-control" name="username" placeholder="username" />
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input 
                  onChange={(e) => this.setState({ password: e.target.value })}
                  className="form-control" name="password" placeholder="password" />
                </label>
              </div>
            </div>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;