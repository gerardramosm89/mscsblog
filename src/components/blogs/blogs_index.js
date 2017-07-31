import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BlogsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts("go through action!");
  }

  renderBlogs() {
    return _.map(this.props.blogs, blog => {
      return (
        <li className="list-group-item" key={blog.id}>
          {blog.title}
        </li>
      );
    });
  }

  handleUpload(e) {
  }

  render() {
    return (
      <div className="container">
        <h1>Blogs Index</h1>
        <Link to="/blogs/new">
          <button className="btn btn-lg btn-primary">Add Post</button>
        </Link>
        <ul>
          {this.renderBlogs()}
        </ul>
        <div data-toggler data-animate="fade-in fade-out" className="callout secondary">
          <p>This panel fades.</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogs };
}
export default connect(mapStateToProps, { fetchPosts })(BlogsIndex);