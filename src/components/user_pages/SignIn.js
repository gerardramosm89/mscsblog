import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/index';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    };
  }

  componentDidMount() {
  }
  componentDidUpdate() {
    console.log("SignIn component updated!");
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username.length > 0) {
      console.log(e.target);
      console.log(this.state.username.length);
    } else {
      this.setState({
        error: "Well well, you should probably put in BOTH a username and password shouldn't you? ahahahaha"
      });
    }
    this.setState({
      username: '',
      password: ''
    });
    this.props.signIn({ username: this.state.username, password: this.state.password });
  }
  renderError() {
    if (!this.state.error) return null;
    else {
      return (
        <div className="alert alert-warning" role="alert">
          <strong>NOPE!</strong> {this.state.error}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <h1 className="text-center">Sign In Page</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="col-6 offset-3">
              {this.renderError()}
              <div className="form-group">
                <label htmlFor="username">Username</label>
                  <input
                  value={this.state.username}
                  id="username"
                  onChange={(e) => this.setState({ 
                    username: e.target.value,
                    error: null
                    })} className="form-control" name="username" placeholder="username" />
              </div>
              <div className="form-group">
                <label>Password</label>
                  <input 
                  value={this.state.password}
                  onChange={(e) => this.setState({ 
                    password: e.target.value,
                    error: null
                     })}
                  className="form-control" name="password" placeholder="password" />
              </div>
              <button className="btn btn-block btn-primary">Submit</button>
            </div>

        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { signInStatus: state.signInStatus };
}
export default connect(mapStateToProps, { signIn })(SignIn);
// export default SignIn;