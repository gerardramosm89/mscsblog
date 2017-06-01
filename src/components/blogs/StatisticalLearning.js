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
        <div className="card" key={post.postOrder}>
          <div className="card-header">
            <div>Path #: {post.postOrder}</div>
          </div>
          <div className="card-block">
            <h4 className="card-title">{post.title}</h4>
            <h6 className="card-text">{post.content}</h6>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <section>
          <div className="sl__header">
            <h1>
              Statistical Learning
            </h1>
          </div>
        </section>
        <section className="sl__body">
          <div className="container">
            <div className="row">
              <div className="col-8 offset-2">
                {this.renderPosts()}
              </div>
            </div>
          </div>
        </section>


      </div>
    );
  }
}
function mapStateToProps(state) {
  return { learningPathPosts: state.learningPathPosts, token: state.token };
}
export default connect(mapStateToProps, { fetchByLearningPath })(StatisticalLearning);