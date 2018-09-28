import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAllBarbers, fetchBarber } from '../../thunks';
import { AllBarbersView } from '../views';

// Container component;
class AllBarbersContainer extends Component {
  componentDidMount() {
    this.props.fetchAllBarbers();
  }

  render() {
    return (
      <AllBarbersView
        allBarbers={this.props.allBarbers}
        setBarber={this.props.setBarber}
        openModal={this.props.openModal}
      />
    );
  }
}

// Map state to props;
const mapState = state => {
  return {
    allBarbers: state.allBarbers
  };
};

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    fetchAllBarbers: () => dispatch(fetchAllBarbers()),
    setBarber: barberId => dispatch(fetchBarber(barberId))
  };
};

// Type check incoming props from Redux store;
AllBarbersContainer.propTypes = {
  allBarbers: PropTypes.arrayOf(PropTypes.object).isRequired
};

// Export by default our store-connected container component;
export default connect(mapState, mapDispatch)(AllBarbersContainer);
