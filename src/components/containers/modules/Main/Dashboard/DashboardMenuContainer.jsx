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
  handleClick = (evt) => {
    this.setState({selectedId: evt.currentTarget.attributes.getNamedItem('value').value})
    this.props.fetchCoworkerAppointments(evt.currentTarget.attributes.getNamedItem('value').value);
  }

  render() {
    const activeUser = this.state.selectedId || (this.props.allBarbers && this.props.allBarbers.length && this.props.allBarbers[0]._id);

    return (
      <DashboardMenuView allBarbers={this.props.allBarbers} handleClick={this.handleClick} selectedUser={activeUser} currentUser={this.props.currentUser} />
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
