import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LearningPaths from './learning_paths';
import GModal from './utils/gmodal';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  handleFreeTrial(e) {
    e.preventDefault();
    this.props.history.push('/signup');
  }
  
  render() {
    return(
      <div>
        <div style={{position: 'relative'}}>
          <div className='home-header-bg'>
          </div>
          <section className="jumbotron text-center home-header-main-text">
            <div className="container">
              <h1 className="jumbotron-heading home-heading">Machine Learning Headquarters</h1>
              <p className="lead text-muted jumbotron-subheading">While exciting and dynamic, machine learning can be intimidating and frustrating. Our goal is to make machine learning accessible to as many people as possible, regardless of background or education.</p>
            </div>
          </section>
        </div>
        <LearningPaths />
      </div>
    );
  }
}

export default Home;