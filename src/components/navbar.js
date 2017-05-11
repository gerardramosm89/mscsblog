import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/index';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // this.props.token ? console.log("token is there!") : console.log("token is not there");
    console.log("token from navbar", this.props.token.token);
  }
  handleLogout() {
    this.props.signOut();
  }
  componentDidUpdate() {
    console.log("navbar component updated!");
  }
  renderLogoutBtn() {
    if (this.props.token.token === null) {
      return (
          <li className="nav-item">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
      );
    } else {
      return (
        <li className="nav-item">
          <span className="nav-link" onClick={this.handleLogout.bind(this)}>Logout</span>
        </li>
      );
    }
  }

  render() {
    return(
      <nav className="col-12">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/imageupload">Upload File</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          {this.renderLogoutBtn()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token }
}
export default connect(mapStateToProps, { signOut })(Navbar);