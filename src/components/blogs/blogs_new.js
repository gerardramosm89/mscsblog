import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../actions/index';
import _ from 'lodash';

class BlogsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categories: '',
      content: '',
      postResponse: null
    }
  }

  newBlogButton(e) {
    e.preventDefault();
    const self = this;
    this.props.createBlog({
      token: this.props.token.token,
      newblog: {
        title: this.state.title,
        content: this.state.content
      }
    });
    this.setState({
      postResponse: 'Message submitted! Redirecting to dashboard'
    });
    setTimeout(function() {
      console.log('After 1 second delay');
      self.props.history.push('/dashboard');
    }, 1500);
  }
  renderPostMessage() {
    if (this.state.postResponse) {
      return (
        <div className="alert alert-success" role="alert">
          <strong>Post submitted!</strong> You successfully posted the message, redirecting...
        </div>
      );
    } else {
      return null;
    }
  }
  titleInput(e) {
    this.setState({
      title: e.target.value
    });
  }
  categoriesInput(e) {
    this.setState({
      categories: e.target.value
    });
  }
  contentInput(e) {
    this.setState({
      content: e.target.value
    });
  }
  render() {
    return (
      <div>
        <section className="col-6 offset-3">
          {this.renderPostMessage()}
          <form onSubmit={this.newBlogButton.bind(this)}>
            <h1>{this.props.newBlog.title}</h1>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control newblog__header"type="text" onChange={this.titleInput.bind(this)} value={this.state.title} />
            </div>
            <h1>{this.props.newBlog.content}</h1>
            <div className="form-group">
              <label>Content</label>
              <textarea rows="5" className="form-control" onChange={this.contentInput.bind(this)} value={this.state.content} />
            </div>
            <button className="button" onClick={this.newBlogButton.bind(this)}>New Blog</button>
          </form>
        </section>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { newBlog: state.newBlog, token: state.token };
}

export default connect(mapStateToProps, { createBlog })(BlogsNew);