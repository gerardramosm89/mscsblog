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
        <div className="card card-block--margin" key={post.postOrder}>
          {/*<div className="card-header">
            <div>Path #: {post.postOrder}</div>
          </div>*/}
          <div className="card-block path-card">
            <h4 className="card-title path-title">{post.title}</h4>
            <h6 className="card-text path-text">{post.content}</h6>
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

            <div className="container">
              <div className="row">
                <div className="col-7 offset-1">
                  <h1 className="sl__header--heading">
                    Statistical Learning
                  </h1>
                  <p className="sl__header--subheading">
                    From foundational concepts and skills to emerging technologies and platforms, our Statistical Learning Path covers the full range of areas to build and strengthen your Machine Learning knowledge.
                  </p>
                </div>
            </div>
            </div>
          </div>
        </section>
        <section className="sl__body">
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1">
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