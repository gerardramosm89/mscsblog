import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      title: '',
      content: ''
    };
  }
  componentDidMount() {
    let data = { token: this.props.token.token, postId: this.props.match.params.id }; 
    axios.post('http://mlhq.io:3050/api/fetchone', data)
      .then(res => {
        this.setState({
          post: res.data[0],
          title: res.data[0].title,
          content: res.data[0].content
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
    const updates = { postId: this.props.match.params.id, updates: { title: this.state.title, content: this.state.content }};
    axios.post('http://mlhq.io:3050/api/updateOne', updates)
      .then(response => {
      });
  }
  titleInput(e) {
    this.setState({
      title: e.target.value
    });
  }
  contentInput(e) {
    this.setState({
      content: e.target.value
    });
  }
  render() {
    if (!this.state.title) {
      return <div>loading</div>
    }
    return (
      <div>
        <section className="col-6 offset-3">
          <form onSubmit={this.updateBlog.bind(this)}>
            <div className="form-group">
              <label>Title</label>
              <input className="form-control newblog__header"type="text" onChange={this.titleInput.bind(this)} value={this.state.title} />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea rows="5" className="form-control" onChange={this.contentInput.bind(this)} value={this.state.content} />
            </div>
            <button className="button" onClick={this.updateBlog.bind(this)}>New Blog</button>
          </form>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, {  })(EditBlog);