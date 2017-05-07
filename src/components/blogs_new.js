import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../actions';
import _ from 'lodash';

class BlogsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categories: '',
      content: ''
    }
  }

  newBlogButton() {
    this.props.createBlog({ 
      title: this.state.title,
      categories: this.state.categories,
      content: this.state.content 
    });
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
        <h1>{this.props.newBlog.title}</h1>
        <label>Title</label>
        <input type="text" onChange={this.titleInput.bind(this)} value={this.state.title} />
        <h1>{this.props.newBlog.categories}</h1>
        <label>Categories</label>
        <input type="text" onChange={this.categoriesInput.bind(this)} value={this.state.categories} />
        <h1>{this.props.newBlog.content}</h1>
        <label>Content</label>
        <input type="text" onChange={this.contentInput.bind(this)} value={this.state.content} />
        <button onClick={this.newBlogButton.bind(this)}>New Blog</button>
        <button onClick={() => this.forceUpdate()}>Update</button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { newBlog: state.newBlog };
}

export default connect(mapStateToProps, { createBlog })(BlogsNew);