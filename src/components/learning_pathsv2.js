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
        image: 'https://mlhq.io/img/pic02.jpg',
        btnColor: 'learning-path-button-lavander'
      },
      {
        title: 'Algorithms',
        subheading: '"Why do I need to learn how to sort?!" It’s built into programing languages!” We know, we are right there with you, but the importance of good computer science fundamentals is undeniable',
        path: 'algorithms',
        image: 'https://mlhq.io/img/pic01.jpg',
        btnColor: 'learning-path-button-orchid'
      },
      {
        title: 'Data Structures',
        subheading: 'From Linked Lists, to Hash tables, to Binary trees, etc.',
        path: 'data-structures',
        image: 'https://mlhq.io/img/pic03.jpg',
        btnColor: 'learning-path-button-teal'
      },
      {
        title: 'Artificial Intelligence',
        subheading: 'Theory and development of computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.',
        path: 'artificial-intelligence',
        image: 'https://mlhq.io/img/pic04.jpg',
        btnColor: 'learning-path-button-lavander'
      },
      {
        title: 'Deep Learning',
        subheading: 'Practical application of machine learning using neural networks, simulating neural responses to understand and process complex data representations.',
        path: 'deep-learning',
        image: 'https://mlhq.io/img/pic04.jpg',
        btnColor: 'learning-path-button-orchid'
      },
      {
        title: 'Natural Language Processing',
        subheading: 'Explore a subset of artificial intelligence involving teaching computers to accept, interpret, and react to human communication.',
        path: 'natural-language-processing',
        image: 'https://mlhq.io/img/pic04.jpg',
        btnColor: 'learning-path-button-lavander'
      },
      {
        title: 'Computational Science',
        subheading: 'Understand the methods with which computer simulations are used to map, model, and solve natural systems spanning many scientific disciplines.',
        path: 'computational-science',
        image: 'https://mlhq.io/img/pic04.jpg',
        btnColor: 'learning-path-button-teal'
      },
    ];
    this.state = {
      paths
    }
  }
  renderCards() {
    return this.state.paths.map(path => {
      return(
        <div key={path.title}className="card-container">
          <div className="card-header-image">
            <img src={`${path.image}`} />
          </div>
          <div className="card-text-learning">
            <h1>{path.title}</h1>
            <p>{path.subheading}</p>
          </div>
          <div className="card-button">
            <Link className={`learning-path-button ${path.btnColor}`} to={`${path.path}`}>Begin</Link>
          </div>
        </div>
      );
    })
  }
  render() {
    return(
      <div className="paths-row">
        <div className="paths-container">
          { this.renderCards() }
        </div>
      </div>
    );
  };
}
