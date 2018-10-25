import React, { Component } from 'react';
import axios from 'axios';
import { ReviewFormView } from '../../../../views/modules/Main';

export default class ReviewFormContainer extends Component {
  handleSubmit = evt => {
      evt.preventDefault()
    const rating = evt.target.rating.value;
    const body = evt.target.reviewBody.value;
    const { barberId, customerId } = this.props.match.params; // TODO SWAP CUSTOMER ID FOR EMAIL ?
    axios
      .post(`/api/barbers/${barberId}/review`, {
        rating,
        body,
        barberId,
        customerId
      })
      .catch(console.log);
  };

  render() {
    return <ReviewFormView handleSubmit={this.handleSubmit} />;
  }
}
