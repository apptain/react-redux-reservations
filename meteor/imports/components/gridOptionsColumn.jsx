import React, {Component, PropTypes} from 'react'
import MediaQuery from 'react-responsive'
import DropDown from './dropDown'
import LinkSet from './linkSet'

var GridActionColumn = React.createClass({
  propTypes: {
    params: PropTypes.object
  },
  componentWillReceiveProps: function(props) {
    this.collapseOnScreenWidth = props.params.collapseWidth || 700;
  },
  render: function() {
    this.changeInitiators = [];

    //Object props to array
    //TODO Create utility
    for (var key in this.props.params.colDef.changeInitiators) {
      if (this.props.params.colDef.changeInitiators.hasOwnProperty(key)) {
        this.changeInitiators.push(key)
      }
    }

    return (
      <div>
        <MediaQuery maxWidth={ this.collapseOnScreenWidth }>
          <DropDown
            options={ this.changeInitiators }
            onSelect={ this.props.params.onSelect }
          />
        </MediaQuery>
        <MediaQuery minWidth={ this.collapseOnScreenWidth }>
          <LinkSet
            options={ this.changeInitiators }
            onSelect={ this.props.params.onSelect }
          />
        </MediaQuery>
      </div>
    )
  }
});

export default GridActionColumn;
