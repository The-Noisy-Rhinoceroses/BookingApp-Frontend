import React, { Component } from 'react';
import axios from 'axios';
import { ServicesView } from '../../views/modules/'

class ServicesContainer extends Component {
  constructor() {
    super();
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    axios
      .get("/api/services")
      .then(res => res.data)
      .then(services => this.setState({services}))
      .catch(err => console.log(err))
  }

  render() {
    <ServicesView services={this.state.services} />
  }
}

export default ServicesContainer;
