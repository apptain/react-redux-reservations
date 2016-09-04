import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

var DropDown = React.createClass({
  onChange: function (e) {
    return this.props.select(e.target.value, e.target.id);
  },
  render: function(){
    debugger;
    return (
      <select onChange={this.handleChange}>
        {this.props.options.map(function(option){
          return <option value={option}>{option}</option>
        })}
      </select>
    )
  }
})

export default DropDown;
