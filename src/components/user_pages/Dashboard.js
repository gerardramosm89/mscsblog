import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/index';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('this.props.token is: ', this.props.token);
  }

  componentDidUpdate() {
    console.log("Dashboard component updated!");
  }

  newPost(data) {
    axios.post('http://localhost:3050/api/', data)
      .then(response => {
        console.log('response from axios post is: ', response);
      });
  }
  render() {
    return (
      <div>
        <h1>Dashboard Component</h1>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, { signIn })(Dashboard);