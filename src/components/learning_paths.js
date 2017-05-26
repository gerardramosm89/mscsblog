import React, { Component } from 'react';

class LearningPaths extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="overlay">

              </div>

              <div className="floater">
                <div className="floater-top">
                  <input type="text" class="fomr-control" placeholder="What are you thinking"/>
                </div>
                <div className="floater-bottom">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>

              <div className="text-center">
                <h1 className="select_your_path__header">Select your path <i className="fa fa-question-circle-o path-helper" aria-hidden="true"></i></h1>
              </div>



              <div className="row">
                <div className="col-4">
                  <div className="card card-path">
                    <img className="card-img-top" src="/img/linear-regression.jpg" alt="Card image cap" />
                    <div className="card-block">
                      <h4 className="card-title">Statistical Learning</h4>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">I want to learn this!</a>
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

export default LearningPaths;