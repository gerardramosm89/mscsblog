import React, { Component } from 'react';

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
        <header className="home-header__wrapper">
          <div className="home-header__text-container">
            
            <h1>Machine Learning Headquarters</h1>
            <p className="home-header--subheading">
              Need to have some kind of subheading here, right now just going to keep this as a placeholder
            </p>
            <div className="btns__container">
              <div className="btn__border">
                <div className="btn__text">
                  View a sample post <i className="fa fa-arrow-circle-right arrow-lg" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <video className="home-header__video" width="100%" height="100%" src="../../img/mlhqheader.mp4" autoPlay loop ></video>
        </header>
      </div>
    );
  }
}

export default Home;