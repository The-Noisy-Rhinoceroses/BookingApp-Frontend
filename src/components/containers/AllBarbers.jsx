import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBarbers } from '../../thunks';
import AllBarbers from '../views/AllBarbers';

// Container component;
class AllBarbersContainer extends Component {
  componentDidMount() {
    this.props.listAllBarbers();
  }

  render() {
    return <AllBarbers allBarbers={this.props.allBarbers} />
  }
}

// Map state to props;
const mapState = state => {
  return {
    allBarbers: state.allBarbers
  }
}

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    listAllBarbers: () => dispatch(fetchAllBarbers())
  }
}

// Export by default our store-connected container component;
export default connect(mapState, mapDispatch)(AllBarbersContainer);
