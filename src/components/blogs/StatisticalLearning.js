import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class StatisticalLearning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  // componentDidUpdate() {
  //   if (!this.props.token.token) {
  //     this.props.history.push('/signin');
  //   }
  // }
  render() {
    console.log('from editblog', this.props.token.token);
    console.log('this.state.post', this.state.post);
    return (
      <div>
        <h2>Statistical Learning Posts</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, {  })(StatisticalLearning);