import React, { Component } from 'react';
// import LearningPaths from './learning_paths';
import LearningPaths from './learning_pathsv2';
class HomeV2 extends Component {
  render() {
    return (
    	<div className="home-body">
    	  <div className="home-container">
    	    <div className="home-header-text">
    	      <h1>Machine Learning Headquarters</h1>
            <p>While exciting and dynamic, machine learning can be intimidating and frustrating. Our goal is to make machine learning accessible to as many people as possible, regardless of background or education.</p>
    	    </div>
    	  </div>
        <LearningPaths />
    	</div>
    );
  }
}

export default HomeV2;