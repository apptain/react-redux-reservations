import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const OverlaysContainer = React.createClass({
  render() {
    return (
      <Overlays overlays={this.props.overlays} />
    )
  }
});

// now we connect the component to the Redux store:
var mapStateToProps = function(state){
  return {

  }
};

var mapDispatchToProps = function(dispatch){
  return {

  }
};

export default connect(mapStateToProps,mapDispatchToProps)(OverlaysContainer);
