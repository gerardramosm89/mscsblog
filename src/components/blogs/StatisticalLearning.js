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
    console.log(document.getElementById('body'));
  }
  componentDidUpdate() {

  }
  renderPosts() {
    if (!this.props.learningPathPosts) return
    else
    return this.props.learningPathPosts.map(post => {
      return (
        <div key={post._id}>
          <div className="statistical-learning__card--container">
            <div className="statistical-learning__card--image">
              
            </div>
            <div className="statistical-learning__card--text">
              <Link to={"/blogs/" + post._id}><h1>{post.title}</h1></Link>
              <p>{post.subheading}</p>
            </div>
            <div className="statistical-learning__author-date__container">
              <div>
                <p className="statistical-learning__card--author">Chris Sawtelle</p>
              </div>
              <div>
                <p className="statistical-learning__card--date">June 7, 2017</p>
              </div>
            </div>

          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <header className="statistical-learning__header--container">
          <div className="statistical-learning__header--inner">
            <div className="statistical-learning__header--icon">
              <div dangerouslySetInnerHTML={{__html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19rem" height="19rem" viewBox="0 0 62 65" version="1.1"> <!-- Generator: Sketch 40.1 (33804) - http://www.bohemiancoding.com/sketch --> <title>machine-learning</title> <desc>Created with Sketch.</desc> <defs/> <g id="techno" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="machine-learning" transform="translate(1.000000, 1.000000)" stroke-width="2"> <path d="M15,59 C19.4,59 23,55.4 23,51 L23,51" id="Shape" stroke="#082947"/> <path d="M45,59 C40.6,59 37,55.4 37,51 L37,51" id="Shape" stroke="#082947"/> <path d="M30,63 L46,63 L46,60.3 C46,59.6 45.3,59 44.5,59 L30,59 L15.5,59 C14.8,59 14,59.6 14,60.3 L14,63 L30,63 L30,63 Z" id="Shape" stroke="#082947"/> <path d="M29,46 L31,46" id="Shape" stroke="#082947"/> <path d="M57.5,9.3 C58.9,9.9 60,11.3 60,12.9 L60,47 C60,49.2 58.2,51 56,51 L4,51 C1.8,51 0,49.2 0,47 L0,13 C0,10.8 1.8,9 4,9 L15.8,9" id="Shape" stroke="#082947"/> <path d="M0,41 L60,41" id="Shape" stroke="#082947"/> <path d="M21.2,12.2 C21.1,11.8 21.1,11.3 21.1,10.9 C21.1,6.4 24.8,2.8 29.4,2.8 C30.2,2.8 32.6,0.4 38.8,1.1 C40.9,1.3 43.4,2.4 44.9,3.9 C45.2,3.9 45.5,3.8 45.8,3.8 C49.9,4 54,9 53.6,13.3 C54,14.3 54.2,15.3 54.2,16.5 C54.2,19.9 52.3,22.8 49.4,24.2 L49.4,24.2 C45.9,26 46,28.8 45.6,30.6 C45.4,31.3 44.8,32.4 43.4,32.4 C41.6,32.4 41.4,30.4 41.4,30.4 C41.1,27.4 38.3,25.7 35.7,25.7 C35.5,25.7 35.3,25.7 35.1,25.8 C30.9,27.4 26.8,24.7 25.7,23.1 C25.4,22.6 20.2,21.5 20.2,15.6 C20.2,14.4 20.6,13.2 21.2,12.2 L21.2,12.2 Z" id="Shape" stroke="#009AAD"/> <path d="M21.2,12.2 C21.2,12.2 23.4,19.5 31.9,16" id="Shape" stroke="#009AAD"/> <path d="M25.7,16.7 C25.7,16.7 29.4,16.4 29.4,13.1" id="Shape" stroke="#009AAD"/> <path d="M44.9,3.9 C44.9,3.9 39.6,4 38.3,10" id="Shape" stroke="#009AAD"/> <path d="M39.7,6.8 C39.7,6.8 40.4,8.5 42.4,9.6" id="Shape" stroke="#009AAD"/> <path d="M35.2,25.9 C35.2,25.9 42.2,24.7 44.5,16.5" id="Shape" stroke="#009AAD"/> <path d="M42.7,20.3 C42.7,20.3 42.4,18.7 41,17.3" id="Shape" stroke="#009AAD"/> <path d="M18.2,24.9 L13.9,29.2" id="Shape" stroke="#009AAD"/> <path d="M22,27 L22,29" id="Shape" stroke="#009AAD"/> <path d="M16,21 L14,21" id="Shape" stroke="#009AAD"/> </g> </g> </svg>'}} />
            </div>
            <div className="statistical-learning__header--text">
              <h1 className="statistical-learning__header--header">Statistical Learning</h1>
              <h1 className="statistical-learning__header--subheading">Here is where we talk about linear and polynomial regression, logistic regression and linear discriminant analysis; cross-validation and the bootstrap, model selection and regularization methods (ridge and lasso); nonlinear models, splines and generalized additive models; tree-based methods.</h1>
            </div>
          </div>
        </header>
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