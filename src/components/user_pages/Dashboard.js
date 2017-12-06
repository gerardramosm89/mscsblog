import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, fetchToken, toggleModal, fetchBlogs } from '../../actions/index';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { safeURLify } from '../../utils/stringLowerAndReplaceSpaces';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentWillMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/');
      this.props.toggleModal();
    }
  }
  componentDidMount() {
    this.props.fetchBlogs();
  }

  newPost() {
  }
  deletePost(postId) {
    const data = { token: this.props.token.token, postId: postId };
    axios.post('https://mlhq.io/api/deleteOne', data).then((response) => {
      axios.post('https://mlhq.io/api/queryblogs', { token: this.props.token.token })
      .then(response => {
        this.setState({
          blogs: response.data.blogs
        });
      });
    });  
  }
  renderBlogs() {
    if (this.props.blogs.length === 0) {
      return <div>No posts loaded, have you written any posts?</div>
    }
    return this.props.blogs.map(blog => {
      return (
        <div className="col-10 offset-1" key={blog._id}>
            <Link to={`/blogs/${safeURLify(blog.title)}`}><h5>{blog.title}</h5></Link>
            <Link to={`/blogs/edit/${safeURLify(blog.title)}`}><button className="btn btn-warning">Edit Post</button></Link>          
            <button className="btn btn-danger" onClick={this.deletePost.bind(this, blog._id)}>Delete Post</button>
        </div>
      );
    });
  }
  newPost(e) {
    e.preventDefault();
    this.props.history.push('/blogs/new');
  }
  render() {
    return (
      <div>
        <div className="col-sm-6 offset-sm-3">
          <div className="card text-center">
            <h3 className="card-header">Welcome to your Dashboard</h3>
            <div className="card-block">
              <h4 className="card-title">All your posts will be stored here</h4>
              <p className="card-text">Feel free to make changes as you wish</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 text-center">
              <button className="btn btn-info" onClick={this.newPost.bind(this)}>New Post</button>
            </div>
            <h2 className="col-10 offset-1">Your Posts</h2>
              {this.renderBlogs()}
          </div>
        </div>


      </div>
    );
  }
}


function mapStateToProps(state) {
  return { token: state.token, blogs: state.blogs.blogs };
}
export default connect(mapStateToProps, { signIn, fetchToken, toggleModal, fetchBlogs })(Dashboard);
