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

  changePass(e) {
    e.preventDefault();
    console.log(`this.state of change password is: ${this.state}`)
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
        <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Current Password</label>
          <input className="form-control" name="currentPassword" onChange={this.inputChange.bind(this)} placeholder="Current Password" />
        </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {
    
  }
}
export default connect(mapStateToProps, { changeUserPassword })(ChangePasswordComponent)