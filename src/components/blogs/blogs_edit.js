import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class EditBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }
  componentDidMount() {
    let data = { token: this.props.token.token, postId: this.props.match.params.id }; 
    axios.post('http://localhost:3050/api/fetchone', data)
      .then(res => {
        this.setState({
          post: res.data[0]
        });
        return console.log('res from edit is: ', res);
      });
  }
  render() {
    console.log('from editblog', this.props.token.token);
    console.log('this.state.post', this.state.post);
    return (
      <div>
        <h1>Edit Blog Component</h1>
        <h2>Title is: {this.state.post.title}</h2>
        <p>Content is: {this.state.post.content}</p>
        <p>Id you are looking at is: {this.props.match.params.id}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, {  })(EditBlog);