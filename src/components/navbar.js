import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions/index';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.current = false;
  }
  handleLogout() {
    this.props.signOut();
  }
  accountBtn() {
    this.current = !this.current;
    this.current ? (this.account.classList.add('show')) : (this.account.classList.remove('show'))
  }
  renderLogout() {
    if (this.props.token.token === null) {
      return (
          <li
          onMouseLeave={this.accountBtn.bind(this)} 
          onMouseEnter={this.accountBtn.bind(this)} className="nav-item dropdown">
            <div className="nav-link">Account</div>
            <div ref={account => this.account = account} className="g-dropdown">
              <Link className="nav-link" to="/signin">Sign In</Link>
              <Link className="nav-link" to="/signup">Sign Up</Link>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </div>
          </li>
      );
    } else {
      return (
          <li
          onMouseLeave={this.accountBtn.bind(this)} 
          onMouseEnter={this.accountBtn.bind(this)} className="nav-item dropdown">
            <div className="nav-link">Account</div>
            <div ref={account => this.account = account} className="g-dropdown">
              <div className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                <span className="nav-link" onClick={this.handleLogout.bind(this)}>Logout</span>
              </div>
            </div>
          </li>
      );
    }
  }

  render() {
    return(
      <nav className="col-12">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link navbar-brand" to="/">MLHQ</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/learningpaths">Learning Paths</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
            to="/">Glossary</Link>
          </li>
          {/*<li className="nav-item">
            <Link className="nav-link" to="/imageupload">Upload File</Link>
          </li>*/}
          {this.renderLogout()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token }
}
export default connect(mapStateToProps, { signOut })(Navbar);