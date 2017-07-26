import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByLearningPath } from '../../actions/index';
import { Link } from 'react-router-dom';
import { safeURLify } from '../../utils/stringLowerAndReplaceSpaces';

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
        <div className="col-md-8 col-sm-10 offset-md-2 offset-sm-1 col-lg-6 offset-lg-3" key={post._id}>
          <div className="card mb-3">
            <img className="card-img-top statistical-learning__card-img-top" src="/img/linear-regression.jpg" alt="Card image cap" />
            <div className="card-block">
              <Link className="statistical-learning__post-title" to={"/blogs/" + safeURLify(post.title)}><h4 className="card-title">{post.title}</h4></Link>
              <p className="card-text">{post.subheading}</p>
              <p className="card-text"><small className="text-muted">Date: {post.createdAt.slice(0,10)}</small></p>
            </div>
          </div>
          {/* <div className="statistical-learning__card--container">
            <div className="statistical-learning__card--image">
              
            </div>
            <div className="statistical-learning__card--text">
              <Link to={"/blogs/" + post._id}><h1>{post.title}</h1></Link>
              <p>{post.subheading}</p>
            </div>
            <div className="statistical-learning__author-date__container">
              <div>
                <p className="statistical-learning__card--author">
                  {post.author}
                </p>
              </div>
              <div>
                <p className="statistical-learning__card--date">
                  Created: {post.createdAt.slice(0,10)}
                </p>
              </div>
            </div>

          </div> */}
        </div>
      );
    });
  }
  render() {
    return (
      <div>

<section className="jumbotron text-center statistical-learning__header">
  <div className="container">
    <h1 className="jumbotron-heading">Statistical Learning</h1>
    <p className="lead text-muted">Here is where we talk about linear and polynomial regression, logistic regression and linear discriminant analysis; cross-validation and the bootstrap, model selection and regularization methods (ridge and lasso); nonlinear models, splines and generalized additive models; tree-based methods.</p>
  </div>
</section>
<hr />


        <section className="statistical-learning__body">
          <div className="statistical-learning__body--inner">
            {this.renderPosts()}
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