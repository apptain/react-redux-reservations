import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

var LinkSet = React.createClass({
  propTypes: {
    options: PropTypes.array.isRequired
  },
  statusChange: function(e){
    return this.props.select(e.target.value, e.target.id);
  },
  render: function(){
    return (
      <select>
        {this.props.options.map(function(option){
          return <option {option.value}>{option.name}</option>
        })}
      </select>
    )
  }
})

export default LinkSet;
