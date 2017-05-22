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
    console.log('this.props.token is: ', this.props.token);
    axios.post('http://localhost:3050/api/queryblogs', { token: this.props.token.token })
    .then(response => {
      console.log('response from axios post is: ', response);
      this.setState({
        blogs: response.data.blogs
      }, console.log("this.state.blogs is: ", response.data.blogs));
    });
  }

  componentDidUpdate() {
    console.log("Dashboard component updated!");
    if (!this.props.token.token) {
      this.props.history.push('/signin');
    }
  }

  newPost() {
    console.log('hi');
  }
  renderBlogs() {
    if (!this.state.blogs) {
      return <div>No posts loaded, have you written any posts?</div>
    }
    return this.state.blogs.map(blog => {
      return (
        <div key={blog._id}>
          <Link to={`/blogs/${blog._id}`}><h1>{blog.title}</h1></Link>
          <p>{blog.content}</p>
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
        <h1>Dashboard Component</h1>
        <button className="btn btn-info" onClick={this.newPost.bind(this)}>New Post</button>
        <button onClick={this.newPost.bind(this)} className="btn btn-primary">Query Blogs</button>
        {this.renderBlogs()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, { signIn })(Dashboard);