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
      <ul className="link-set">
        {this.props.options.map(function(option){
          return <li><a>{option}</a></li>
        })}
      </ul>
    )
  }
})

export default LinkSet;
