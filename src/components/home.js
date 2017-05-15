import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <header className="home-header__wrapper">
          <div className="home-header__text-container">
            <h1>MSCS Blog.</h1>
            <p className="home-header--subheading">
              Hooking you up with the latest in machine learning.
            </p>
          </div>
        </header>
        <section className="info-section">
          info section
        </section>
      </div>
    );
  }
}

export default Home;