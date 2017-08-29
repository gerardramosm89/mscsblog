import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByLearningPath, routePush } from '../actions/index';

class LearningPaths extends Component {
  constructor(props) {
    super(props);
        this.topics = [
      {
        title: 'Statistical Learning',
        subheading: 'Interesting in learning about Machine Learning? So are we, this is for the people who want to dive into deeper learning and data analysis',
        path: 'statistical-learning',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.5rem" height="12.5rem" viewBox="0 0 62 65" version="1.1"> <!-- Generator: Sketch 40.1 (33804) - http://www.bohemiancoding.com/sketch --> <title>machine-learning</title> <desc>Created with Sketch.</desc> <defs/> <g id="techno" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="machine-learning" transform="translate(1.000000, 1.000000)" stroke-width="2"> <path d="M15,59 C19.4,59 23,55.4 23,51 L23,51" id="Shape" stroke="#082947"/> <path d="M45,59 C40.6,59 37,55.4 37,51 L37,51" id="Shape" stroke="#082947"/> <path d="M30,63 L46,63 L46,60.3 C46,59.6 45.3,59 44.5,59 L30,59 L15.5,59 C14.8,59 14,59.6 14,60.3 L14,63 L30,63 L30,63 Z" id="Shape" stroke="#082947"/> <path d="M29,46 L31,46" id="Shape" stroke="#082947"/> <path d="M57.5,9.3 C58.9,9.9 60,11.3 60,12.9 L60,47 C60,49.2 58.2,51 56,51 L4,51 C1.8,51 0,49.2 0,47 L0,13 C0,10.8 1.8,9 4,9 L15.8,9" id="Shape" stroke="#082947"/> <path d="M0,41 L60,41" id="Shape" stroke="#082947"/> <path d="M21.2,12.2 C21.1,11.8 21.1,11.3 21.1,10.9 C21.1,6.4 24.8,2.8 29.4,2.8 C30.2,2.8 32.6,0.4 38.8,1.1 C40.9,1.3 43.4,2.4 44.9,3.9 C45.2,3.9 45.5,3.8 45.8,3.8 C49.9,4 54,9 53.6,13.3 C54,14.3 54.2,15.3 54.2,16.5 C54.2,19.9 52.3,22.8 49.4,24.2 L49.4,24.2 C45.9,26 46,28.8 45.6,30.6 C45.4,31.3 44.8,32.4 43.4,32.4 C41.6,32.4 41.4,30.4 41.4,30.4 C41.1,27.4 38.3,25.7 35.7,25.7 C35.5,25.7 35.3,25.7 35.1,25.8 C30.9,27.4 26.8,24.7 25.7,23.1 C25.4,22.6 20.2,21.5 20.2,15.6 C20.2,14.4 20.6,13.2 21.2,12.2 L21.2,12.2 Z" id="Shape" stroke="#009AAD"/> <path d="M21.2,12.2 C21.2,12.2 23.4,19.5 31.9,16" id="Shape" stroke="#009AAD"/> <path d="M25.7,16.7 C25.7,16.7 29.4,16.4 29.4,13.1" id="Shape" stroke="#009AAD"/> <path d="M44.9,3.9 C44.9,3.9 39.6,4 38.3,10" id="Shape" stroke="#009AAD"/> <path d="M39.7,6.8 C39.7,6.8 40.4,8.5 42.4,9.6" id="Shape" stroke="#009AAD"/> <path d="M35.2,25.9 C35.2,25.9 42.2,24.7 44.5,16.5" id="Shape" stroke="#009AAD"/> <path d="M42.7,20.3 C42.7,20.3 42.4,18.7 41,17.3" id="Shape" stroke="#009AAD"/> <path d="M18.2,24.9 L13.9,29.2" id="Shape" stroke="#009AAD"/> <path d="M22,27 L22,29" id="Shape" stroke="#009AAD"/> <path d="M16,21 L14,21" id="Shape" stroke="#009AAD"/> </g> </g> </svg>'
      },
      {
        title: 'Algorithms',
        subheading: '"Why do I need to learn how to sort?!" It’s built into programing languages!” We know, we are right there with you, but the importance of good computer science fundamentals is undeniable',
        path: 'algorithms',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.5rem" height="12.5rem" viewBox="0 0 58 60" version="1.1"> <!-- Generator: Sketch 40.1 (33804) - http://www.bohemiancoding.com/sketch --> <title>results</title> <desc>Created with Sketch.</desc> <defs/> <g id="techno" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="results"> <path d="M11.5,24 L36.5,24 C37.052,24 37.5,23.552 37.5,23 C37.5,22.448 37.052,22 36.5,22 L11.5,22 C10.948,22 10.5,22.448 10.5,23 C10.5,23.552 10.948,24 11.5,24 L11.5,24 Z" id="Shape" fill="#082947"/> <path d="M11.5,16 L21.5,16 C22.052,16 22.5,15.552 22.5,15 C22.5,14.448 22.052,14 21.5,14 L11.5,14 C10.948,14 10.5,14.448 10.5,15 C10.5,15.552 10.948,16 11.5,16 L11.5,16 Z" id="Shape" fill="#082947"/> <path d="M11.5,32 L36.5,32 C37.052,32 37.5,31.552 37.5,31 C37.5,30.448 37.052,30 36.5,30 L11.5,30 C10.948,30 10.5,30.448 10.5,31 C10.5,31.552 10.948,32 11.5,32 L11.5,32 Z" id="Shape" fill="#082947"/> <path d="M28.5,38 L11.5,38 C10.948,38 10.5,38.448 10.5,39 C10.5,39.552 10.948,40 11.5,40 L28.5,40 C29.052,40 29.5,39.552 29.5,39 C29.5,38.448 29.052,38 28.5,38 L28.5,38 Z" id="Shape" fill="#082947"/> <path d="M25.5,46 L11.5,46 C10.948,46 10.5,46.448 10.5,47 C10.5,47.552 10.948,48 11.5,48 L25.5,48 C26.052,48 26.5,47.552 26.5,47 C26.5,46.448 26.052,46 25.5,46 L25.5,46 Z" id="Shape" fill="#082947"/> <path d="M47.5,34.363 L47.5,14.586 L32.914,0 L0.5,0 L0.5,60 L44.5,60 C51.668,60 57.5,54.168 57.5,47 C57.5,40.866 53.224,35.723 47.5,34.363 L47.5,34.363 Z M33.5,3.414 L44.086,14 L33.5,14 L33.5,3.414 L33.5,3.414 Z M37.578,58 L2.5,58 L2.5,2 L31.5,2 L31.5,16 L45.5,16 L45.5,34.044 C45.158,34.015 44.826,34 44.5,34 C37.332,34 31.5,39.832 31.5,47 C31.5,47.399 31.525,47.792 31.56,48.183 C31.568,48.274 31.577,48.364 31.587,48.455 C31.63,48.837 31.685,49.215 31.76,49.586 C31.769,49.63 31.781,49.673 31.79,49.717 C31.862,50.055 31.949,50.387 32.047,50.715 C32.072,50.797 32.095,50.88 32.121,50.961 C32.234,51.313 32.36,51.659 32.501,51.998 C32.528,52.062 32.558,52.124 32.585,52.187 C32.714,52.483 32.854,52.772 33.004,53.056 C33.04,53.124 33.074,53.193 33.111,53.261 C33.286,53.578 33.474,53.887 33.675,54.188 C33.721,54.257 33.769,54.323 33.816,54.391 C33.999,54.655 34.191,54.912 34.392,55.161 C34.43,55.208 34.466,55.257 34.505,55.304 C34.736,55.582 34.98,55.848 35.233,56.105 C35.295,56.168 35.358,56.229 35.422,56.291 C35.667,56.53 35.918,56.762 36.181,56.981 C36.204,57.001 36.226,57.022 36.25,57.041 C36.532,57.273 36.827,57.49 37.129,57.699 C37.202,57.75 37.276,57.799 37.35,57.848 C37.427,57.897 37.501,57.951 37.578,58 L37.578,58 Z M44.5,58 C38.435,58 33.5,53.065 33.5,47 C33.5,40.935 38.435,36 44.5,36 C44.812,36 45.12,36.021 45.426,36.047 C45.717,36.075 46.018,36.113 46.335,36.166 L46.778,36.24 C51.753,37.293 55.5,41.716 55.5,47 C55.5,53.065 50.565,58 44.5,58 L44.5,58 Z" id="Shape" fill="#082947"/> <path d="M49.679,41.429 L44.083,49.469 L40.134,46.227 C39.708,45.876 39.077,45.939 38.727,46.366 C38.376,46.793 38.438,47.423 38.866,47.773 L43.652,51.702 C43.832,51.849 44.056,51.929 44.286,51.929 C44.331,51.929 44.377,51.926 44.423,51.92 C44.699,51.881 44.947,51.73 45.107,51.501 L51.321,42.572 C51.636,42.119 51.525,41.495 51.071,41.18 C50.617,40.863 49.995,40.976 49.679,41.429 L49.679,41.429 Z" id="Shape" fill="#009AAD"/> </g> </g> </svg>'
      },
      {
        title: 'Data Structures',
        subheading: 'From Linked Lists, to Hash tables, to Binary trees, etc.',
        path: 'data-structures',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12.5rem" height="12.5rem" viewBox="0 0 64 66" version="1.1"> <!-- Generator: Sketch 40.1 (33804) - http://www.bohemiancoding.com/sketch --> <title>big-data</title> <desc>Created with Sketch.</desc> <defs/> <g id="techno" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="big-data" transform="translate(1.000000, 1.000000)" stroke-width="2"> <circle id="Oval" stroke="#009AAD" cx="31" cy="32" r="15"/> <circle id="Oval" stroke="#082947" cx="31" cy="4" r="4"/> <circle id="Oval" stroke="#082947" cx="31" cy="60" r="4"/> <circle id="Oval" stroke="#082947" cx="4" cy="17" r="4"/> <circle id="Oval" stroke="#082947" cx="58" cy="17" r="4"/> <circle id="Oval" stroke="#082947" cx="4" cy="47" r="4"/> <circle id="Oval" stroke="#082947" cx="58" cy="47" r="4"/> <path d="M31,17 L31,47" id="Shape" stroke="#009AAD"/> <path d="M31.2,17 C36,20.2 39.2,25.7 39.2,32 C39.2,38.3 36,43.8 31.2,47" id="Shape" stroke="#009AAD"/> <path d="M30.8,47 C26,43.8 22.8,38.3 22.8,32 C22.8,25.7 26,20.2 30.8,17" id="Shape" stroke="#009AAD"/> <path d="M46,32 L16,32" id="Shape" stroke="#009AAD"/> <path d="M41.1,20.9 C38.2,22.9 34.7,24 31,24 C27.3,24 23.8,22.9 20.9,20.9" id="Shape" stroke="#009AAD"/> <path d="M41.1,43.1 C38.2,41.1 34.7,40 31,40 C27.3,40 23.8,41.1 20.9,43.1" id="Shape" stroke="#009AAD"/> <path d="M35,60 L55.1,49.7" id="Shape" stroke="#082947"/> <path d="M58,43 L58,21" id="Shape" stroke="#082947"/> <path d="M55.9,13.6 L35,5.4" id="Shape" stroke="#082947"/> <path d="M27,4.6 L6.9,14.2" id="Shape" stroke="#082947"/> <path d="M4,21 L4,43" id="Shape" stroke="#082947"/> <path d="M6.2,50.3 L27,58.9" id="Shape" stroke="#082947"/> <path d="M47.9,41.4 L54.5,45" id="Shape" stroke="#082947"/> <path d="M7.3,19.3 L13.7,22.8" id="Shape" stroke="#082947"/> <path d="M31,51 L31,56" id="Shape" stroke="#082947"/> <path d="M31,8 L31,13" id="Shape" stroke="#082947"/> <path d="M48.4,22.6 L54.5,19.3" id="Shape" stroke="#082947"/> <path d="M7.3,44.8 L13.7,41.1" id="Shape" stroke="#082947"/> </g> </g> </svg>'
      }
    ]
  }
  componentDidMount() {
    this.props.fetchByLearningPath();

  }
  renderTopics() {
    return this.topics.map(topic => {
      return (
        <div onClick={() => this.props.routePush(`/${topic.path}`)}key={topic.title} className="col-4">
          <div className="topic-card">
            <div className="topic-card--top">
              <div className="topic-icon">
                <span dangerouslySetInnerHTML={{ __html: topic.icon}}></span>
              </div>
            </div>
            <div className="topic-card--bottom">
              <div className="topic-card--bottom__header">
                {topic.title}
              </div>
              <div className="topic-card--bottom__subheading">
                {topic.subheading}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return(
      <div style={{ paddingBottom: '1rem'}}>
        {/* <header className="learning-paths__header-container">
          <h1 className="learning-paths__heading">Topics we cover</h1>
          <p className="learning-paths__subheading">This is our current collection as we go through the journey of learning these different topics.</p>
        </header> */}
        
        <section className="container topic-container">
          <div className="row">
            {this.renderTopics()}
          </div>
        </section>

        <section>
          <div className="quote-container">
            <div className="quote-inner">
              <p>"If you can't explain it simply, you probably don't understand it."</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { learningPathPosts: state.learningPathPosts };
}
export default connect(mapStateToProps, { fetchByLearningPath, routePush })(LearningPaths);