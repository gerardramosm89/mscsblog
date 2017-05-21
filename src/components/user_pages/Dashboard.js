import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/index';
import axios from 'axios';

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
  }

  newPost() {
    console.log('hi');

  }
  renderBlogs() {
    if (!this.state.blogs) {
      return <div>No posts loaded, have you written any posts?</div>
    }
    // if (this.state.blogs.length == 0) {
    //   return <div>loading</div>
    // }
    return this.state.blogs.map(blog => {
      return (
        <div key={blog._id}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Dashboard Component</h1>
        <p>the token is: {this.props.token.token}</p>
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