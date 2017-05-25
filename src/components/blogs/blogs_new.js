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
      postResponse: null,
      learningPath: 'Statistical Learning',
      publish: true
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
  handleLearningPathChange(e) {
    e.preventDefault();
    this.setState({
      learningPath: !e.target.value
    });
  }
  handlePublish(e) {
    e.preventDefault();
    const self = this;
    self.newValue = !e.target.checked;
    console.log('e.target.checked is: ', e.target.checked);
    console.log('this.state.publish is: ', this.state.publish);
    this.setState({
      publish: self.newValue
    });
  }
  componentDidUpdate() {
    console.log('newpost updated');
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

            <div className="form-group">
              <label>Learning Path</label>
              <select
              className="form-control" 
              onChange={this.handleLearningPathChange.bind(this)}
              value={this.state.learningPath}
              >
                <option  value="Statistical Learning">Statistical Learning</option>
              </select>
            </div>

        <label>
          Is going:
          <input
            name="publish"
            type="checkbox"
            checked={this.state.publish}
            onChange={this.handlePublish.bind(this)} />
        </label>

            <button className="btn btn-lg btn-info" onClick={this.newBlogButton.bind(this)}>Post Blog</button>
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