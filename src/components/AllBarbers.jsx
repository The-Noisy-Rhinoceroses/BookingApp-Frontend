import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllBarbers } from '../thunks';

// Component;
class AllBarbers extends Component {
  componentDidMount() {
    this.props.listAllBarbers();
  }

  render() {
    return (
      <div>
        {this.props.allBarbers.map(barber => (
          <div key={barber._id}>
            <h1>{barber.firstName} {barber.lastName}</h1>
            <img src={barber.imgUrl} alt={`${barber.firstName} ${barber.lastName}`}></img>
          </div>
        ))}
      </div>
    )
  }
}

// Map State To Props;
const mapState = state => {
  return {
    allBarbers: state.allBarbers
  }
}

// Map Dispatch To Props;
const mapDispatch = dispatch => {
  return {
    listAllBarbers: () => dispatch(fetchAllBarbers())
  }
}

// Connect Component to Store;
const AllBarbersContainer = connect(mapState, mapDispatch)(AllBarbers);

// Export;
export default AllBarbersContainer;
