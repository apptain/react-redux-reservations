import React, {Component, PropTypes} from 'react'
import DropDown from './dropDown'
import LinkSet from './linkSet'

var GridActionColumn = React.createClass({
  propTypes: {
    actionInitiators: PropTypes.array.isRequired,
    collapseOnScreenWidth: PropTypes.number
  }
  componentWillReceiveProps: function(props) {
    this.collapseOnScreenWidth = props.collapseWidth || 700;
  }
  render: function() {
    return (
      <div>
        <MediaQuery maxDeviceWidth={this.collapseOnScreenWidth} >
          <LinkSet options={ this.params.actionInitiators } />
        </MediaQuery>
        <MediaQuery minDeviceWidth={this.collapseOnScreenWidth} >
          <DropDown options={ this.params.actionInitiators } />
        </MediaQuery>
      </div>
    )
  }
}

export default GridActionColumn;
