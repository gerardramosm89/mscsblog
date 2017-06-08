import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../../actions/index';
import _ from 'lodash';
import { Editor } from 'react-draft-wysiwyg';

class BlogsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      categories: '',
      content: '',
      postResponse: null,
      learningPath: 'Statistical Learning',
      publish: true,
      postOrder: null,
      editorState: '',
      editorHTML: '',
      difficulty: '',
      subheading: ''
    }
  }

  newBlogButton(e) {
    e.preventDefault();
    const self = this;
    this.props.createBlog({
      token: this.props.token.token,
      newblog: {
        title: this.state.title,
        content: this.state.content,
        postOrder: this.state.postOrder,
        publish: this.state.publish,
        learningPath: { orderNum: this.state.postOrder, path: this.state.learningPath },
        difficulty: this.state.difficulty,
        subheading: this.state.subheading
      }
    });
    this.setState({
      postResponse: 'Message submitted! Redirecting to dashboard'
    });
    setTimeout(function() {
      self.props.history.push('/dashboard');
    }, 1000);
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

  subheadingInput(e) {
    this.setState({
      subheading: e.target.value
    });
  }

  difficultyInput(e) {
    this.setState({
      difficulty: e.target.value
    });
  }

  handleLearningPathChange(e) {
    e.preventDefault();
    this.setState({
      learningPath: !e.target.value
    });
  }
  handlePublish(e) {
    const target = e.target;
    const value = target.checked;
    console.log('this.state.publish is: ', this.state.publish);
    this.setState({
      [e.target.name]: value
    });
  }

  consoleLogPublish(e) {
    console.log('this.state is: ', this.state);
  }

  componentDidUpdate() {
    console.log('newpost updated');
  }

  postOrder(e) {
    const postOrder = e.target.value;
    this.setState({
      postOrder
    });
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
      editorHTML: this.input.editor.refs.editor.innerHTML
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

            <div className="form-group">
              <label>Subheading</label>
              <input className="form-control newblog__header"type="text" onChange={this.subheadingInput.bind(this)} value={this.state.subheading} />
            </div>

            <div className="form-group">
              <label>Difficulty</label>
              <input className="form-control newblog__header"type="text" onChange={this.difficultyInput.bind(this)} value={this.state.difficulty} />
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
            <div className="form-group">
              <label>Post Order</label>
              <input className="form-control" type="number" onChange={this.postOrder.bind(this)} />  
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="publish"
                  type="checkbox"
                  checked={this.state.publish}
                  onChange={this.handlePublish.bind(this)} 
                />  
                Publish now?
              </label>
            </div>

            <Editor
            ref={node => this.input = node} 
            onChange={this.onEditorStateChange.bind(this)} 
            />

            <button className="btn btn-lg btn-info" onClick={this.newBlogButton.bind(this)}>Post Blog</button>
          </form>
        </section>
            <button onClick={this.consoleLogPublish.bind(this)} className="btn btn-lg">Console log this.state.publish</button>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return { newBlog: state.newBlog, token: state.token };
}

export default connect(mapStateToProps, { createBlog })(BlogsNew);