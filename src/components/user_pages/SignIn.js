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
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username.length > 0) {
    } else {
      this.setState({
        error: "Well well, you should probably put in BOTH a username and password shouldn't you? ahahahaha"
      });
    }
    this.setState({
      password: ''
    });

    this.props.signIn({ 
      username: this.state.username, 
      password: this.state.password
    }).then(response => {
        if (response.payload.request.status == 200) {
          this.props.history.push('/dashboard');
        }
    });
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
  renderPasswordError() {
    if (this.props.token.message == 'Wrong password') {
      return (
        <div className="alert alert-warning">
          <strong>Oh snap!</strong>Incorrect password or username, please check
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <div>
        <div className="signin__wrapper">
          <div className="signin__inner col-8 offset-2">
          <h1 className="text-center">Sign In Page</h1>
          {this.renderPasswordError()}
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
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
                    type="password"
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
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, { signIn })(SignIn);
// export default SignIn;