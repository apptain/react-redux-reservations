import React, {Component, PropTypes} from 'react'
import MediaQuery from 'react-responsive'
import DropDown from './dropDown'
import LinkSet from './linkSet'

var GridActionColumn = React.createClass({
  propTypes: {
    params: PropTypes.object
  },
  componentWillReceiveProps: function(props) {
    this.collapseOnScreenWidth = props.collapseWidth || 700;
  },
  render: function() {
    this.changeInitiators = [];

    for (var key in this.props.params.colDef.changeInitiators) {
      if (this.props.params.colDef.changeInitiators.hasOwnProperty(key)) {
        this.changeInitiators.push(key)
      }
    }
    debugger
    return (
      <div>
        <MediaQuery maxWidth={999}>
          <DropDown
            options={ this.changeInitiators }
          />
        </MediaQuery>
        <MediaQuery minWidth={1000}>
          <LinkSet
            options={ this.changeInitiators }
          />
        </MediaQuery>
      </div>
    )
  }
});

export default GridActionColumn;
