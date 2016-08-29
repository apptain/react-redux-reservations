import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader'
import { browserHistory } from 'react-router'
import * as reservationActions from '../actions/reservationActions'
import Grid from '../components/grid'

import ReservationsSchema from '../schemas/reservationSchema';
import { Reservations } from '../collections'

const ReservationsContainer = React.createClass({
  componentDidMount() {
    //TODO move into actions/reducers
    const reservationsSub = Meteor.subscribe('reservationsQueried');
    //TODO add filter to reservationssub. Add permissions to filter
    //const userPermissionsSub = Meteor.subscribe('users.permissions');
    setTimeout(this.handleSubs(reservationsSub), 0);
  },
  handleSubs(reservationsSub) {
    Meteor.autorun(() => {
      if(reservationsSub.ready()){
        this.props.reservationsQueried(Reservations.find());
      }
    });
  },
  render() {
    return (
      <div className="grid">
        <Loader loaded={this.props.loaded}>
          { this.props.reservations ?
            <Grid {...this.props} />
          :
            <div>No Data</div>
          }
        </Loader>
      </div>
    )
  }
});

var mapStateToProps = function(state){
  return {
    reservations: state.reservations.reservations,
    loaded: state.reservations.loaded
  }
};

var mapDispatchToProps = function(dispatch){
  return {
    reservationsQueried: function(filters){
      dispatch(contentActions.contentRead(content));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReservationsContainer);
