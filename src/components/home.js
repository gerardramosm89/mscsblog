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
            <h1>MLHQ Blog.</h1>
            <p className="home-header--subheading">
              Hooking you up with the latest in machine learning.
            </p>
            <div className="btns__container">
              <button className="team-trial-btn btn btn-lg">
                Start a team trial
              </button>
              <button onClick={this.handleFreeTrial.bind(this)} className="free-trial-btn btn btn-lg">
                Start a free trial
              </button>
            </div>
          </div>

        </header>
        <section className="info-section">
          <div className="info-section__inner">
            <h1>Learn them machines</h1>
            <p>Machine peepin' is tha subfield of computa science that, accordin ta Arthur Samuel up in 1959, gives "computas tha mobilitizzle ta learn without bein explicitly programmed." Evolved from tha study of pattern recognition n' computationizzle peepin' theory up in artificial intelligence, machine peepin' explores tha study n' construction of algorithms dat can learn from n' make predictions on data" such algorithms overcome followin strictly static program </p>
          </div>
        </section>
        <div className="container">
          <section className="row">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-header">
                  Section
                </div>
                <div className="card-block">
                  <h4 className="card-title">Amazon Web Services</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>
                  {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
                </div>
                {/*<div className="card-footer text-muted">
                  2 days ago
                </div>*/}
              </div>
            </div>
          </section>
        </div>

      </div>
    );
  }
}

export default Home;