import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeUserPassword } from '../../../actions/index';
class ChangePasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      currentPassword: '',
      newPassword: ''
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
    });
  }
  render() {
    return (
      <div>
        <h1>Change your password</h1>
        <input name="currentPassword" onChange={this.inputChange.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps() {
  return {
    
  }
}
export default connect(mapStateToProps, { changeUserPassword })(ChangePasswordComponent)