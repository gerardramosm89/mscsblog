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
      confirmPassword: ''
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
    this.props.changeUserPassword(this.state);
  }
  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state));
  }
  render() {
    return (
      <div className="col-6">
        <h1>Change your password</h1>
        <form onSubmit={this.changePass.bind(this)} >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Current Password</label>
          <input className="form-control" name="currentPassword" onChange={this.inputChange.bind(this)} placeholder="Current Password" />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input className="form-control" name="newPassword" onChange={this.inputChange.bind(this)} placeholder="New Password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input className="form-control" name="confirmPassword" onChange={this.inputChange.bind(this)} placeholder="Confirm Password" />
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