import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBlog, fetchNumPostsByLearningPath } from '../../actions/index';
import _ from 'lodash';
import { Editor } from 'react-draft-wysiwyg';
import ImageUpload from '../image_upload';

class BlogsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      postResponse: null,
      learningPath: 'Statistical Learning',
      publish: true,
      postOrder: null,
      editorState: '',
      editorHTML: '',
      difficulty: '',
      subheading: '',
      coverImageName: '',
      SLLength: '',
      DSLength: '',
      AlgorithmsLength: '',
      AILength: '',
      DeepLearningLength: '',
      NLPLength: ''
    }
  }
  componentWillMount() {
    let num1 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Statistical Learning', short: 'SLLength' });
    let num2 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Data Structures', short: 'DSLength' });
    let num3 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Algorithms', short: 'AlgorithmsLength' });
    let num4 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Artificial Intelligence', short: 'AILength' });
    let num5 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Deep Learning', short: 'DeepLearningLength' });
    let num6 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Natural Language Processing', short: 'NLPLength' });
    Promise.all([num1,num2,num3,num4, num5, num6])
      .then(data => {
        console.log('data is: ', data);
        data.map((data, i) => {
          this.setState({
            [data.payload.short]: data.payload.request.data.length
          });
        });
      });
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
        subheading: this.state.subheading,
        titleImageName: this.state.coverImageName
      }
    }, function() {
      this.setState({
        postResponse: 'Message submitted! Redirecting to dashboard'
      });
      setTimeout(function() {
        self.props.history.push('/dashboard');
      }, 1000);
    }.bind(this));
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
  handlePublish(e) {
    const target = e.target;
    const value = target.checked;
    this.setState({
      [e.target.name]: value
    });
  }
  onEditorStateChange(editorState) {
    this.setState({
      editorState,
      editorHTML: this.input.editor.refs.editor.innerHTML
    });
  }
  inputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <ImageUpload />
        <section className="col-6 offset-3">
          {this.renderPostMessage()}
          <form onSubmit={this.newBlogButton.bind(this)}>
            <h1>{this.props.newBlog.title}</h1>

           <div className="form-group">
              <label>Title Cover Image File Name</label>
              <input name="coverImageName" className="form-control newblog__header"type="text" onChange={this.inputChange.bind(this)} value={this.state.coverImageName} />
            </div>


            <div className="form-group">
              <label>Title</label>
              <input name="title" className="form-control newblog__header" type="text" onChange={this.inputChange.bind(this)} value={this.state.title} />
            </div>

            <div className="form-group">
              <label>Subheading</label>
              <input name="subheading" className="form-control newblog__header"type="text" onChange={this.inputChange.bind(this)} value={this.state.subheading} />
            </div>

            <div className="form-group">
              <label>Difficulty</label>
              <input name="difficulty" className="form-control newblog__header"type="text" onChange={this.inputChange.bind(this)} value={this.state.difficulty} />
            </div>

            <h1>{this.props.newBlog.content}</h1>
            <div className="form-group">
              <label>Content</label>
              <textarea name="content" rows="5" className="form-control" onChange={this.inputChange.bind(this)} value={this.state.content} />
            </div>
            <div className="form-group">
              <label>Learning Path</label>
              <select
              name="learningPath"
              className="form-control" 
              onChange={this.inputChange.bind(this)}
              value={this.state.learningPath}
              >
                <option value="Statistical Learning">Statistical Learning ({this.state.SLLength})</option>
                <option value="Algorithms">Algorithms ({this.state.AlgorithmsLength})</option>
                <option value="Data Structures">Data Structures ({this.state.DSLength})</option>
                <option value="Artificial Intelligence">Artificial Intelligence ({this.state.AILength})</option>
                <option value="Deep Learning">Deep Learning ({this.state.DeepLearningLength})</option>
                <option value="Natural Language Processing">Natural Language Processing ({this.state.NLPLength})</option>
              </select>
            </div>
            <div className="form-group">
              <label>Post Order</label>
              <input name="postOrder" className="form-control" type="number" onChange={this.inputChange.bind(this)} />  
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

export default connect(mapStateToProps, { createBlog, fetchNumPostsByLearningPath })(BlogsNew);