import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateBlog, fetchOneBlog, fetchNumPostsByLearningPath } from '../../actions/index';
import GModal from '../utils/gmodal.js';

class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      learningPath: 'Statistical Learning',
      publish: true,
      postOrder: null,
      difficulty: '',
      subheading: '',
      SLLength: '',
      DSLength: '',
      AlgorithmsLength: '',
      AILength: '',
      DeepLearningLength: '',
      NLPLength: '',
      CSLength: '',
      markdownChecked: false
    };
  }

  componentWillMount() {
    let num1 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Statistical Learning', short: 'SLLength' });
    let num2 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Data Structures', short: 'DSLength' });
    let num3 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Algorithms', short: 'AlgorithmsLength' });
    let num4 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Artificial Intelligence', short: 'AILength' });
    let num5 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Deep Learning', short: 'DeepLearningLength' });
    let num6 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Natural Language Processing', short: 'NLPLength' });
    let num7 = this.props.fetchNumPostsByLearningPath({ learningPath: 'Computational Science', short: 'CSLength' });
    Promise.all([num1,num2,num3,num4, num5, num6, num7])
      .then(data => {
        data.map((data, i) => {
          this.setState({
            [data.payload.short]: data.payload.request.data.length
          });
        });
      });
  }

  componentDidMount() {
    let data = { token: this.props.token.token, postId: this.props.match.params.id };
    this.props.fetchOneBlog(data)
      .then(() => {
        let post = this.props.blog;
        this.setState({
          postId: post._id,
          title: post.title,
          content: post.content,
          subheading: post.subheading,
          difficulty: post.difficulty,
          learningPath: post.learningPath.path,
          postOrder: post.learningPath.orderNum,
          publish: post.publish,
          titleImageName: post.titleImageName || ''
        })
      });
  }
  componentDidUpdate() {
    if (!this.props.token.token) {
      this.props.history.push('/signin');
    }
  }
  updateBlog(e) {
    e.preventDefault();
    const updates = { 
    postId: this.state.postId, 
    updates: { 
      title: this.state.title, 
      subheading: this.state.subheading,
      content: this.state.content,
      learningPath: { 
        orderNum: this.state.postOrder, 
        path: this.state.learningPath
      },
      difficulty: this.state.difficulty,
      publish: this.state.publish,
      titleImageName: this.state.titleImageName
    }};
    const currentStateArray = Object.entries(this.state);
    let canWeEdit = true;
    currentStateArray.forEach(item => {
      if (item[1] === '' || item[1] === null || item[1] === undefined) {
        canWeEdit = false;
      }
    });
    if (canWeEdit) {
      this.props.updateBlog(updates)
      .then(() => { this.props.history.push('/dashboard')});
    } else {
      document.querySelector('#warningButton').click()
    }
  }
  titleInput(e) {
    this.setState({
      title: e.target.value
    });
  }

  subheadingInput(e) {
    this.setState({
      subheading: e.target.value
    });
  }

  contentInput(e) {
    this.setState({
      content: e.target.value
    });
  }

  postOrder(e) {
    const postOrder = e.target.value;
    this.setState({
      postOrder
    });
  }

  handleLearningPathChange(e) {
    this.setState({
      learningPath: e.target.value
    });
    e.preventDefault();
  }
  titleImageNameInput(e) {
    this.setState({
      titleImageName: e.target.value
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
        <section className="col-8 offset-2">
          <form onSubmit={this.updateBlog.bind(this)}>

            <div className="form-group">
              <label>Title Image Name</label>
              <input className="form-control newblog__header"type="text" onChange={this.titleImageNameInput.bind(this)} value={this.state.titleImageName} />
            </div>

            <div className="form-group">
              <label>Title</label>
              <input className="form-control newblog__header"type="text" onChange={this.titleInput.bind(this)} value={this.state.title} />
            </div>
            
            <div className="form-group">
              <label>Subheading</label>
              <input className="form-control newblog__header"type="text" onChange={this.subheadingInput.bind(this)} value={this.state.subheading} />
            </div>

            <div className="form-group">
              <label>Content</label>
              <textarea rows="5" className="form-control" onChange={this.contentInput.bind(this)} value={this.state.content} />
            </div>

            <div className="form-group">
              <label>Difficulty</label>
              <input name="difficulty" className="form-control newblog__header"type="text" onChange={this.inputChange.bind(this)} value={this.state.difficulty} />
            </div>

            <div className="form-group">
              <label>Post Order</label>
              <input className="form-control" type="number" onChange={this.postOrder.bind(this)} value={this.state.postOrder} />  
            </div>

            <div className="form-group">
              <label>Learning Path</label>
              <select
              className="form-control" 
              onChange={this.handleLearningPathChange.bind(this)}
              value={this.state.learningPath}
              >
                <option value="Statistical Learning">Statistical Learning ({this.state.SLLength})</option>
                <option value="Algorithms">Algorithms ({this.state.AlgorithmsLength})</option>
                <option value="Data Structures">Data Structures ({this.state.DSLength})</option>
                <option value="Artificial Intelligence">Artificial Intelligence ({this.state.AILength})</option>
                <option value="Deep Learning">Deep Learning ({this.state.DeepLearningLength})</option>
                <option value="Natural Language Processing">Natural Language Processing ({this.state.NLPLength})</option>
                <option value="Computational Science">Computational Science ({ this.state.CSLength })</option>
              </select>
            </div>
            <button className="button btn btn-primary" onClick={this.updateBlog.bind(this)}>Submit changes to blog</button>
          </form>
        {/* Start Modal */}
        <button
        style={{ visibility: 'hidden' }}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#WarningModal"
        id="warningButton"
        >
          {this.props.buttonName ? this.props.buttonName : 'Default Button Name'}
        </button>
        <div className="modal fade" id="WarningModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Please make sure all the fields have been filled out.
                {this.props.children}
              </div>
              <div className="modal-footer">
                {this.props.secondaryButtonText ? <button type="button" className="btn btn-secondary" data-dismiss="modal">{this.props.secondaryButtonText}</button> : <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>}
                {this.props.primaryButtonText ? <button type="button" className="btn btn-primary">{this.props.primaryButtonText}</button>: null}
              </div>
            </div>
          </div>
        </div>

        {/* End Modal */}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    token: state.token,
    blog: state.blogs.blog
  });
}
export default connect(mapStateToProps, { updateBlog, fetchOneBlog, fetchNumPostsByLearningPath })(EditBlog);