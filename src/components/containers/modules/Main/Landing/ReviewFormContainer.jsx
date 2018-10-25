import React, { Component } from 'react';
import axios from 'axios';


export default class ReviewFormContainer extends Component {
  handleSubmit = evt => {
    const rating = evt.target.rating.value;
    const body = evt.target.reviewBody.value;
    const { barberId } = this.props.match.params;
    axios.post(`/api/barber/${barberId}/review`).catch(console.log);
  };

  render() {

  }
}
