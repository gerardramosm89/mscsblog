import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/index';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.current = false;
  }
  componentDidMount() {
  }
  handleLogout() {
    this.props.signOut();
  }
  componentDidUpdate() {
  }
  accountBtn() {
    this.current = !this.current;
    this.current ? (this.account.classList.add('show')) : (this.account.classList.remove('show'))
    
  }
  renderLogoutBtn() {
    const self = this;
    if (this.props.token.token === null) {
      return (
          <li className="nav-item dropdown">
            <div onClick={self.accountBtn.bind(self)} className="nav-link">Account</div>
            <div ref={account => self.account = account} className="g-dropdown">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </div>
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
            <Link className="nav-link" to="/learningpaths">Learning Paths</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/imageupload">Upload File</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
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