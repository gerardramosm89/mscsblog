import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUserPassword } from '../../../actions/index';
class ChangePasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      hasError: null,
      isSuccessful: null
    }
  }
  componentDidMount() {
    this.setState({ token: this.props.token });
  }
  changePass(e) {
    e.preventDefault();
    let { newPassword, confirmPassword } = this.state;
    console.log(`this.state of change password is: ${this.state}`);
    if (newPassword !== confirmPassword) {
      return console.log('Passwords and confirmation must match');
    }
    this.props.changeUserPassword(this.state)
      .then(res => {
        console.log('response from changepass is: ', res)
        if (res.payload.passwordChangeResponse === 'success') {
          this.setState({
            isSuccessful: true
          });
        } else {
          this.setState({ isSuccessful: false })
        }
      });
  }
  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state));
  }
  renderSuccess() {

  }
  renderError() {
    if (this.state.confirmPassword !== this.state.newPassword && (this.state.confirmPassword.length === this.state.newPassword.length)) {
      return(
        <div>
          <div className="alert alert-danger" role="alert">
            Make sure the new passwords match
          </div>
        </div>
      );
    } else {
      return null
    }
    
  }
  render() {
    return (
      <div className="col-6">
        <h1>Change your password</h1>
        {this.state.isSuccessful ? (
          <div className="alert alert-success" role="alert">
            Password changed <strong>successfully</strong>
          </div>
        ) : null}
        <form onSubmit={this.changePass.bind(this)} >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Current Password</label>
          <input type="password" className="form-control" name="currentPassword" onChange={this.inputChange.bind(this)} placeholder="Current Password" />
        </div>
        {this.renderError()}
        <div className="form-group">
          <label>New Password</label>
          <input type="password" className="form-control" name="newPassword" onChange={this.inputChange.bind(this)} placeholder="New Password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" name="confirmPassword" onChange={this.inputChange.bind(this)} placeholder="Confirm Password" />
        </div>
        <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token.token
  }
}
export default connect(mapStateToProps, { changeUserPassword })(ChangePasswordComponent)