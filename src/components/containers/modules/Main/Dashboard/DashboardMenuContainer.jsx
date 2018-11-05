import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoworkerAppointments } from '../../../../../thunks';
import { DashboardMenuView } from '../../../../views/modules/Main';

class DashboardMenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedId: this.props.currentUser._id
    }
  }
  handleChange = (evt) => {
    this.setState({selectedId: evt.target.value})
    this.props.fetchCoworkerAppointments(evt.target.value);
  }

  render() {
    return (
      <DashboardMenuView allBarbers={this.props.allBarbers} handleChange={this.handleChange} selectedUser={this.state.selectedId} currentUser={this.props.currentUser} />
    )
  }
}

const mapState = state => {
  return {
    allBarbers: state.allBarbers,
    currentUser: state.currentUser
  }
}

const mapDispatch = dispatch => {
  return {
    fetchCoworkerAppointments: (barberId) => dispatch(fetchCoworkerAppointments(barberId))
  }
}

export default connect(mapState, mapDispatch)(DashboardMenuContainer);
