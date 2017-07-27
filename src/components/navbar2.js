import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SignIn from './user_pages/SignIn';

export default class Navbar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });

    console.log(this.props);
  }

  componentDidMount() {
    console.log(this.props.className);
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
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Account
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/dashboard">Dashboard</Link>              
              <Link className="dropdown-item" to="/signin">Sign In</Link>
              <Link className="dropdown-item" to="/signup">Sign Up</Link>
            </div>
          </li>
        </ul>
      </div>

        <Button color="danger" onClick={this.toggle}>Sign In</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
             <SignIn /> 
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter> */}
        </Modal>


    </nav>
    );
  }
}