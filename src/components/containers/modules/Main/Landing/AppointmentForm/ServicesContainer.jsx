import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { mountSelectedServices } from '../../../../../../store/utilities/selectedServices';
import { ServicesView } from '../../../../../views/modules/Main';

class ServicesContainer extends Component {
  constructor() {
    super();
    this.state = {
      services: [],
      selectedServices: {}
    };
  }

  handleChange = evt => {
    let service = JSON.parse(evt.target.value);
    if (this.state.selectedServices.hasOwnProperty(service.serviceName)) {
      const currentlySelectedServices = { ...this.state.selectedServices };
      delete currentlySelectedServices[service.serviceName];
      this.setState({ selectedServices: currentlySelectedServices });
    } else {
      this.setState({
        selectedServices: {
          ...this.state.selectedServices,
          [service.serviceName]: service
        }
      });
    }
  };

  handleSubmit = () => {
    this.props.mountSelectedServices(this.state.selectedServices);
  };

  componentDidMount() {
    axios
      .get('/api/services')
      .then(res => res.data)
      .then(services => this.setState({ services }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ServicesView
        services={this.state.services}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleNextIndex={this.props.handleNextIndex}
      />
    );
  }
}

const mapDispatch = dispatch => {
  return {
    mountSelectedServices: selectedServices =>
      dispatch(mountSelectedServices(selectedServices))
  };
};

export default connect(
  null,
  mapDispatch
)(ServicesContainer);
