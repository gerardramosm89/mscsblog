import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByLearningPath } from '../../actions/index';


class StatisticalLearning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }
  componentDidMount() {
    this.props.fetchByLearningPath({ learningPath: "Statistical Learning" });
  }
  componentDidUpdate() {
    console.log('fetched learning path posts is: ', this.props.learningPathPosts)
  }
  renderPosts() {
    if (!this.props.learningPathPosts) {
      return
    }
    return this.props.learningPathPosts.map(post => {
      return (
        <div key={post.postOrder}>
          <h2>{post.title}</h2>
          <h4>{post.postOrder}</h4>
          <p>{post.content}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Statistical Learning Posts</h2>
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { learningPathPosts: state.learningPathPosts, token: state.token };
}
export default connect(mapStateToProps, { fetchByLearningPath })(StatisticalLearning);