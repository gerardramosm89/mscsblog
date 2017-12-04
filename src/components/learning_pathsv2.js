import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LearningPaths extends Component {
  constructor(props) {
    super(props);
    const paths = [
      {
        title: 'Statistical Learning',
        subheading: 'Interesting in learning about Machine Learning? So are we, this is for the people who want to dive into deeper learning and data analysis',
        path: 'statistical-learning',
        image: 'http://mlhq.io/img/pic02.jpg'
      }
    ];
    this.state = {
      paths
    }
  }
  renderCards() {
    return this.state.paths.map(path => {
      return(
        <div className="card-container">
          <div className="card-header-image">
            <img src="http://mlhq.io/img/pic02.jpg" />
          </div>
          <div className="card-text-learning">
            <h1>Lorem Ipsum</h1>
            <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
          </div>
          <div className="card-button">
            <Link to="statistical-learning">Let me learn this</Link>
          </div>
        </div>
      );
    })
  }
  render() {
    return(
      <div className="paths-container">
        <div className="card-container">
          <div className="card-header-image">
            <img src="http://mlhq.io/img/pic02.jpg" />
          </div>
          <div className="card-text-learning">
            <h1>Lorem Ipsum</h1>
            <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
          </div>
          <div className="card-button">
            <Link className="learning-path-button" to="statistical-learning">Let me learn this</Link>
          </div>
        </div>

        <div className="card-container">
          <div className="card-header-image">
          placeholder
          </div>
          <div className="card-text-learning">
            <h1>Lorem Ipsum</h1>
            <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
          </div>
          <div className="card-button">
            <button>Click Me</button>
          </div>
        </div>

        <div className="card-container">
          <div className="card-header-image">
          placeholder
          </div>
          <div className="card-text-learning">
            <h1>Lorem Ipsum</h1>
            <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
          </div>
          <div className="card-button">
            <button>Click Me</button>
          </div>
        </div>

        <div className="card-container">
          <div className="card-header-image">
          placeholder
          </div>
          <div className="card-text-learning">
            <h1>Lorem Ipsum</h1>
            <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
          </div>
          <div className="card-button">
            <button>Click Me</button>
          </div>
        </div>

        <div className="card-container">
          <div className="card-header-image">
          placeholder
          </div>
          <div className="card-text-learning">
            <h1>Lorem Ipsum</h1>
            <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
          </div>
          <div className="card-button">
            <button>Click Me</button>
          </div>
        </div>
      </div>
    );
  };
}