import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByLearningPath } from '../../actions/index';
import { Link } from 'react-router-dom';


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

  }
  renderPosts() {
    if (!this.props.learningPathPosts) return
    else
    return this.props.learningPathPosts.map(post => {
      return (
        <div className="card card-block--margin" key={post._id}>
          <div className="card-block path-card">
            <h4 className="card-title path-title"><Link to={"/blogs/" + post._id}>{post.title}</Link></h4>
            <h6 className="card-text path-text">{post.subheading}</h6>
            <span className="path-date">Last updated {post.updatedAt.slice(0,10)}</span>
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
                <div className="col-10 offset-1">
                  <div className="col-12">
                    <h1 className="sl__header--heading">
                      Statistical Learning
                    </h1>
                  </div>
                  <div className="col-9">
                    <p className="sl__header--subheading">
                      From foundational concepts and skills to emerging technologies and platforms, our Statistical Learning Path covers the full range of areas to build and strengthen your Machine Learning knowledge.
                    </p>
                  </div>

                </div>
            </div>
            </div>
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