import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handlePayment } from '../../../actions';
import { keys } from '../../../../config/clientConfigs/keys';

class Payments extends Component {
  render() {
    return(
      <StripeCheckout
        name="Machine Learning Headquarters"
        description="$5 for 1 Month Subscription"
        amount={500}
        token={token => this.props.handlePayment(token)}
        stripeKey={keys.reactPublicStripeKey}
      >
      <button className="btn btn-primary">
        Add Credits
      </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handlePayment })(Payments);