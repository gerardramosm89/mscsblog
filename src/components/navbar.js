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


  renderAccount() {
    if (this.props.token.token === null) {
      return (
        <div 
        onMouseEnter={this.showContent.bind(this)}
        onMouseLeave={this.showContent.bind(this)}
        className="nav-account dropdown"
        >
          <span className="account-title">Account</span>
          <ul ref={accountContent => this.accountContent = accountContent} className="content">
            <li className="content-item"><Link className="nav-link" to="/signin">Sign In</Link></li>
            <li className="content-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
            <li className="content-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
      );
    } else {
      return (
        <div 
        onMouseEnter={this.showContent.bind(this)}
        onMouseLeave={this.showContent.bind(this)}
        className="nav-account dropdown"
        >
          <span className="account-title">Account</span>
          <ul ref={accountContent => this.accountContent = accountContent} className="content">
            <li className="content-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
            <li className="content-item"><span className="nav-link" onClick={this.handleLogout.bind(this)}>Logout</span></li>
          </ul>
        </div>
      );
    }
  }

  showContent(e) {
    this.current = !this.current;
    this.current ? (this.accountContent.classList.add('show')) : (this.accountContent.classList.remove('show'))
    console.log('this.current is: ', this.current);
  }
  render() {
    return(
      // <nav className="col-12">
      //   <ul className="nav justify-content-center">
      //     <li className="nav-item">
      //       <Link className="nav-link navbar-brand" to="/">MLHQ</Link>
      //     </li>
      //     <li className="nav-item">
      //       <Link className="nav-link" to="/learningpaths">Learning Paths</Link>
      //     </li>
      //     {this.renderLogout()}
      //   </ul>
      // </nav>
      <nav>
        <div className="nav-brand"><Link to="/">MLHQ</Link></div>
        <div className="nav-item"><Link to="/learningpaths">Learning Paths</Link></div>
        {this.renderAccount()}
        {/*<div 
        onMouseEnter={this.showContent.bind(this)}
        onMouseLeave={this.showContent.bind(this)}
        className="nav-account dropdown"
        >
          <span className="account-title">Account</span>
          <ul ref={accountContent => this.accountContent = accountContent} className="content">
            <li className="content-item">Sign In</li>
            <li className="content-item">Sign Up</li>
            <li className="content-item">Dashboard</li>
          </ul>
        </div>*/}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token }
}
export default connect(mapStateToProps, { signOut })(Navbar);