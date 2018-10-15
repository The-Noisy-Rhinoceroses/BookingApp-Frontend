import React, { Component } from 'react';
import axios from 'axios';
import ServicesView  from '../../views/modules/ServicesView';

class ServicesContainer extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      selectedServices : {},
    }
  }

  handleChange = (evt) => {
    let service = evt.target.value;
    if (this.state.selectedServices.hasOwnProperty(service)) {
      const currentlySelectedServices = {...this.state.selectedServices};
      delete currentlySelectedServices[service];
      this.setState({ ...this.state, selectedServices: currentlySelectedServices });
    }
    else {
      this.setState({ ...this.state, selectedServices: { ...this.state.selectedServices, [service]: service } })
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
    return <ServicesView services={this.state.services} handleChange={this.handleChange}/>
  }
}

export default ServicesContainer;
