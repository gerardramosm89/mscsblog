import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.cards = [
      {
        title: 'Amazon Web Services',
        content: 'With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.'
      },
      {
        title: 'Microsoft Azure',
        content: 'With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.'
      },
      {
        title: 'Google Cloud',
        content: 'With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.'
      }
    ];
  }

  handleFreeTrial(e) {
    e.preventDefault();
    this.props.history.push('/signup');
  }

  renderCards() {
    return this.cards.map(card => {
      return (
        <div className="col-md-4" key={card.title}>
          <div className="card text-center">
            <div className="card-header">
            </div>
            <div className="card-block">
              <h4 className="card-title">
                { card.title }
              </h4>
              <p className="card-text">
                { card.content }
              </p>
            </div>
          </div>
        </div>
      );
    });
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

        </header>
        {/*<section className="info-section">
          <div className="info-section__inner">
            <h1>Learn them machines</h1>
            <p>Machine peepin' is tha subfield of computa science that, accordin ta Arthur Samuel up in 1959, gives "computas tha mobilitizzle ta learn without bein explicitly programmed." Evolved from tha study of pattern recognition n' computationizzle peepin' theory up in artificial intelligence, machine peepin' explores tha study n' construction of algorithms dat can learn from n' make predictions on data" such algorithms overcome followin strictly static program </p>
          </div>
        </section>
        <div className="container">
          <section className="row">
            {this.renderCards()}
          </section>
        </div>*/}

      </div>
    );
  }
}

export default Home;