import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateBlog } from '../../actions/index';

class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      subheading: '',
      learningPath: 'Learning path must be selected',
      postId: ''
    };
  }
  componentDidMount() {
    let data = { token: this.props.token.token, postId: this.props.match.params.id };
    
    axios.post('http://mlhq.io:3050/api/fetchone', data)
      .then(res => {
        let post = res.data[0]
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
        });
        return res;
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
      titleImageName: this.state.titleImageName
    }};
    // axios.post('http://mlhq.io:3050/api/updateOne', updates)
    //   .then(response => {
    //   });
    this.props.updateBlog(updates);
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
                <option  value={null}>You need to select a path</option>              
                <option  value="Statistical Learning">Statistical Learning</option>
                <option  value="Algorithms">Algorithms</option>
              </select>
            </div>
            <button className="button btn btn-primary" onClick={this.updateBlog.bind(this)}>Submit changes to blog</button>
          </form>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, { updateBlog })(EditBlog);