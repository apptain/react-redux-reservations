import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader'
import { browserHistory } from 'react-router'
import * as reservationActions from '../actions/reservationActions'
import reservationGridColumns from '../gridColumns/reservationGridColumns'
import Grid from '../components/grid'

import ReservationsSchema from '../schemas/reservationSchema';
import Reservations from '../collections/reservationsCollection'

const ReservationsContainer = React.createClass({
  componentDidMount() {
   },
  handleSubs(reservationsSub) {
   },
  render() {
    return (
      <div className="grid">
          { this.props.reservations ?
            <Grid rowData={this.props.reservations} columnDefs={reservationGridColumns} />
            :
            <div>No Data</div>
          }
      </div>
    )
  }
});

var mapStateToProps = function(state){
  return {
    reservations: state.reservations.reservations
  }
};

var mapDispatchToProps = function(dispatch){
  return {
    reservationsReady: function(reservations){
      dispatch(reservationActions.reservationsQueried(reservations.fetch()));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ReservationsContainer);
