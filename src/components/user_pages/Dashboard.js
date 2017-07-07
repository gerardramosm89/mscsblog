import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/index';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios.post('http://mlhq.io:3050/api/queryblogs', { token: this.props.token.token })
    .then(response => {
      this.setState({
        blogs: response.data.blogs
      });
    });
  }

  componentDidUpdate() {
    if (!this.props.token.token) {
      this.props.history.push('/signin');
    }
  }

  newPost() {
  }
  deletePost(postId) {
    const data = { token: this.props.token.token, postId: postId };
    axios.post('http://mlhq.io:3050/api/deleteOne', data).then((response) => {
      axios.post('http://mlhq.io:3050/api/queryblogs', { token: this.props.token.token })
      .then(response => {
        this.setState({
          blogs: response.data.blogs
        });
      });
    });  
  }
  renderBlogs() {
    if (!this.state.blogs) {
      return <div>No posts loaded, have you written any posts?</div>
    }
    return this.state.blogs.map(blog => {
      // Need to make this safer, right now vulnerable to XSS
      function createMarkUp() {
        return {__html: blog.content}
      }
      return (
        <div className="col-10 offset-1" key={blog._id}>
            <Link to={`/blogs/${blog._id}`}><h5>{blog.title}</h5></Link>
            {/*<p dangerouslySetInnerHTML={createMarkUp()}></p>*/}
            <Link to={`/blogs/edit/${blog._id}`}><button className="btn btn-warning">Edit Post</button></Link>          
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
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 text-center">
              <h1>Your Dashboard</h1>
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
  return { token: state.token };
}
export default connect(mapStateToProps, { signIn })(Dashboard);