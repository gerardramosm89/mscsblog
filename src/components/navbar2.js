import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toggleModal, signOut, routePush, verifyToken, refreshToken } from '../actions/index';

import { connect } from 'react-redux';

import SignIn from './user_pages/SignIn';

class Navbar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.props.verifyToken();
  }
  toggle() {
    this.props.toggleModal();
  }

  onSignOut() {
    this.props.signOut();
    this.props.routePush('/');
  }

  render() {
    return(
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to="/">MLHQ</Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/learningpaths">Learning Paths<span className="sr-only">(current)</span></Link>
          </li>
        </ul>
        {/* { this.props.token ? '': (<Button color="primary" onClick={this.props.toggleModal}>Sign In</Button>) } */}
        {this.props.token ? (
          <div className="dropdown" style={{color: 'white', cursor: 'pointer'}}>
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Account
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
              <Link className="dropdown-item" to="/signup">Sign Up</Link>
              <a
              onClick={this.onSignOut.bind(this)} 
              className="dropdown-item">Logout</a>
            </div>
          </div>
        ) : (<Button color="primary" onClick={this.props.toggleModal}>Sign In</Button>)}
      </div>
        <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
             <SignIn /> 
          </ModalBody>
        </Modal>
    </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modalStatus.modal,
    token: state.token.token
  }
}
export default connect(mapStateToProps, { toggleModal, signOut, routePush, verifyToken, refreshToken })(Navbar2);