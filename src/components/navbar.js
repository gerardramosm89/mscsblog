import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col-12">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/imageupload">Upload File</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;