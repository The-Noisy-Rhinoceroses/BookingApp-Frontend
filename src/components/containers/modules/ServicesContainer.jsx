import React, { Component } from 'react';
import axios from 'axios';
import ServicesView  from '../../views/modules/ServicesView';

class ServicesContainer extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      selectedServices: {},
    }
  }

  handleChange = (evt) => {
    let service = JSON.parse(evt.target.value);
    if (this.state.selectedServices.hasOwnProperty(service.serviceName)) {
      const currentlySelectedServices = {...this.state.selectedServices};
      delete currentlySelectedServices[service.serviceName];
      this.setState({selectedServices: currentlySelectedServices});
    }
    else {
      this.setState({selectedServices: {...this.state.selectedServices, [service.serviceName]: service}})
    }
  }

  componentDidMount() {
    axios
      .get('/api/services')
      .then(res => res.data)
      .then(services => this.setState({services}))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state);
    return <ServicesView services={this.state.services} handleChange={this.handleChange} />
  }
}

export default ServicesContainer;
