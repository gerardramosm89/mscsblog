import React, { Component } from 'react';
import axios from 'axios';

class EditBlog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Edit Blog Component</h1>
        <p>Id you are looking at is: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default EditBlog;