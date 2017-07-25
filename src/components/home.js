import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Machine Learning Headquarters</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
              <Link to="#" className="btn btn-primary">Sample Post</Link>
              {/* <Link to="#" className="btn btn-secondary">Secondary action</Link> */}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;