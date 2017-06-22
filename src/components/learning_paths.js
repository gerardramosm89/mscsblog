import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByLearningPath } from '../actions/index';

class LearningPaths extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchByLearningPath();
  }
  componentDidUpdate() {
    console.log('fetched learning path posts is: ', this.props.learningPathPosts)
  }
  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="select_your_path__header">Select your path <i className="fa fa-question-circle-o path-helper" aria-hidden="true"></i></h1>
              </div>

              <div className="row">
                <div className="col-4">
                  <div onClick={() => this.props.history.push('/statistical-learning')} className="card card-path">
                    <img className="card-img-top" src="/img/linear-regression.jpg" alt="Card image cap" />
                    <div className="card-block">
                      <h4 className="card-title">Statistical Learning</h4>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-teal">I want to learn this!</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { learningPathPosts: state.learningPathPosts };
}
export default connect(mapStateToProps, { fetchByLearningPath })(LearningPaths);