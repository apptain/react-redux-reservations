import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import Toastr from '../../components/toastr.jsx'

var notification = {}

const NotificationsContainer = React.createClass({
  render() {
    return (
      <Toastr notification={this.props.notification} />
    )
  },
});

var mapStateToProps = function(state) {
  if (state.actionResults.actionResult) {
  if (notification._id != state.actionResults.actionResult._id
    && state.actionResults.actionResult.clientMessage) {
    notification = {}
    notification._id = state.actionResults.actionResult._id
    notification.message = state.actionResults.actionResult.clientMessage
    notification.type = state.actionResults.actionResult.resultType
    return {
        notification
      }
    }
  } else {
    return {
      notification: null
    }
  }
}

var mapDispatchToProps = function(dispatch){
  return {
    //Any interactivity from notifications would go here
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(NotificationsContainer);
