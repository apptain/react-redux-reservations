import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader'

import * as reservationActions from '../../actions/app/reservationActions'
import reservationGridColumns from '../../gridColumns/reservationGridColumns'
import Grid from '../components/app/grid'

import ReservationsSchema from '../../schemas/reservationSchema';
import Reservations from '../../collections/reservationsCollection'

const MasterDetailsContainer = React.createClass({
  componentDidMount() {
    //TODO move into actions/reducers
    const reservationsSub = Meteor.subscribe('reservations');
    //TODO add filter to reservationsSub. Add permissions to filter
    //const userPermissionsSub = Meteor.subscribe('users.permissions');
    setTimeout(this.handleSubs(reservationsSub), 0);
  },
  handleSubs(reservationsSub) {
    Meteor.autorun(() => {
      if(reservationsSub.ready()){
        this.props.reservationsReady(Reservations.find());
      }
    });
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

export default connect(mapStateToProps,mapDispatchToProps)(MasterDetailsContainer);


import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import 
import actionTypes from '../../actionTypes'

const MasterDetailsContainer = React.createClass({
  render() {
    return (
      <MasterDetails  />
    )
  }
});

var mapStateToProps = function(state){
  // this is a great place to handle component reactivity 
  // and concentrate reactivity
  // to props is a great place to handle for asynchronicity ?? - No That's what middleware is for
  
  return {
    selected
  }
};

var mapDispatchToProps = function(dispatch){
    return {
      docCreateModalOpen: function(e)
      {
        dispatch(actions.docCreateShow(doc._id,(
            <Modal id='content'>
              <Form 
                schema=""
              />
            </Modal>
          )
        }
      },
      docEditModalShow: function(e) {
        dispatch(actions.docCreateShow(doc._id,(
          <Modal id='content'>
            <Form
              schema=""
            />
          </Modal>
        )
      }
      },
      docModalClose: function(e) {
        
      }
    )
    //Would be a good place for any entire dataset searches
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(MasterDetailsContainer);
