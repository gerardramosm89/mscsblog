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
    const path = this.props.match.path;
    if (path == '/computational-science') {
      this.props.fetchByLearningPath({ learningPath: "Computational Science" });
    } else if (path == '/deep-learning') {
      this.props.fetchByLearningPath({ learningPath: "Deep Learning" });
    } else if (path === '/natural-language-processing') {
      this.props.fetchByLearningPath({ learningPath: "Natural Language Processing" });
    } else if (path === '/algorithms'){
      this.props.fetchByLearningPath({ learningPath: "Algorithms" });
    } else if (path === '/data-structures') {
      this.props.fetchByLearningPath({ learningPath: "Data Structures" });
    } else if (path === '/artificial-intelligence') {
      this.props.fetchByLearningPath({ learningPath: "Artificial Intelligence" });     
    } else {
      this.props.fetchByLearningPath({ learningPath: "Statistical Learning" });    
    }
  }
  goToPost(title) {
    this.props.history.push(`/blogs/${safeURLify(title)}`)
  }
  renderPosts() {
    if (!this.props.learningPathPosts) return
    else
    return this.props.learningPathPosts.map(post => {
      const {
        title,
        titleImageName,
        subheading,
        _id,
        author
      } = post;
      const date = post.createdAt.slice(0,10);
      return (
        <div className="col-md-8 col-sm-10 offset-md-2 offset-sm-1 col-lg-6 offset-lg-3" key={_id}>
          <div className="card_container">
            <div className="header_date_author_container">
              <div className="statistical-learning__heading-subheading-container">
                <h1>{title}</h1>
                <h3>{subheading}</h3>
              </div>
              <div className="statistical-learning__date-author-container">
                <h6 className="statistical-learning__date">Date: {date}</h6>
                <h6 className="statistical-learning__author">Author: {author}</h6>
              </div>
            </div>
            <div className="header_image_text_preview_container">
              <div className="statistical-learning__image">
                <img src={titleImageName ? `https://mlhq.io/img/${titleImageName}`: `https://mlhq.io/img/linear-regression.jpg`} />
              </div>
            </div>
            <div className="bottom_buttons_container">
              <div onClick={this.goToPost.bind(this, title)} className="statistical-learning__post-button">
                <p>Continue Reading</p>
              </div>
            </div>
          </div>

          {/* <hr />

          <div className="card mb-3">
            <img className="card-img-top statistical-learning__card-img-top" src={post.titleImageName ? `/img/${post.titleImageName}`: `/img/linear-regression.jpg`} alt="Card image cap" />
            <div className="card-block">
              <Link className="statistical-learning__post-title" to={"/blogs/" + safeURLify(post.title)}><h4 className="card-title">{post.title}</h4></Link>
              <p className="card-text">{post.subheading}</p>
              <p className="card-text"><small className="text-muted">Date: {post.createdAt.slice(0,10)}</small></p>
            </div>
          </div> */}
        </div>
      );
    });
  }
  renderHeader(path) {
    if (path === '/statistical-learning') {
      return (
        <div>
          <h1 className="jumbotron-heading">Statistical Learning</h1>
          <p className="lead text-muted">Here is where we talk about linear and polynomial regression, logistic regression and linear discriminant analysis; cross-validation and the bootstrap, model selection and regularization methods (ridge and lasso); nonlinear models, splines and generalized additive models; tree-based methods.</p>
        </div>
      );
    } else if (path === '/deep-learning') {
      return(
        <div>
          <h1 className="jumbotron-heading">Deep Learning</h1>
          <p className="lead text-muted">Here is where we talk about linear and polynomial regression, logistic regression and linear discriminant analysis; cross-validation and the bootstrap, model selection and regularization methods (ridge and lasso); nonlinear models, splines and generalized additive models; tree-based methods.</p>
        </div>        
      );
    } else if (path === '/natural-language-processing') {
      return(
        <div>
          <h1 className="jumbotron-heading">Natural Language Processing</h1>
          <p className="lead text-muted">Here is where we talk about linear and polynomial regression, logistic regression and linear discriminant analysis; cross-validation and the bootstrap, model selection and regularization methods (ridge and lasso); nonlinear models, splines and generalized additive models; tree-based methods.</p>
        </div>
      );
    } else if (path === '/algorithms') {
      return(
        <div>
          <h1 className="jumbotron-heading">Algorithms</h1>
          <p className="lead text-muted">Here is where we talk about linear and polynomial regression, logistic regression and linear discriminant analysis; cross-validation and the bootstrap, model selection and regularization methods (ridge and lasso); nonlinear models, splines and generalized additive models; tree-based methods.</p>
        </div>
      );
    } else if (path === '/data-structures') {
      return (
        <div>
          <h1 className="jumbotron-heading">Data Structures</h1>
          <p className="lead text-muted">Here is where we talk about linear and polynomial regression, logistic regression and linear discriminant analysis; cross-validation and the bootstrap, model selection and regularization methods (ridge and lasso); nonlinear models, splines and generalized additive models; tree-based methods.</p>
        </div>
      );
    } else if (path === '/artificial-intelligence') {
      return (
        <div>
          <h1 className="jumbotron-heading">Artificial Intelligence</h1>
          <p className="lead text-muted">Here is where we talk about linear and polynomial regression, logistic regression and linear discriminant analysis; cross-validation and the bootstrap, model selection and regularization methods (ridge and lasso); nonlinear models, splines and generalized additive models; tree-based methods.</p>
        </div>
      );
    } else if (path === '/computational-science') {
      return (
        <div>
          <h1 className="jumbotron-heading">Computational Science</h1>
          <p className="lead text-muted">Understand the methods with which computer simulations are used to map, model, and solve natural systems spanning many scientific disciplines.</p>
        </div>
      );
    }
  }
  render() {
    return (
      <div style={{'backgroundColor': '#f4f4f4'}}>
        <section className="jumbotron text-center statistical-learning__header">
          <div className="container">
            {this.renderHeader(this.props.match.path)}
          </div>
        </section>
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