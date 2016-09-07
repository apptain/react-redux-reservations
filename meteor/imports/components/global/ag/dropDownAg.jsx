import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

var DropDownAg = React.createClass({
  propTypes: {
    params: PropTypes.shape({
      options: PropTypes.array.isRequired,
      onSelect: PropTypes.function.isRequired
    })
  },
  handleSelect: function(e){
    return this.props.select(e.target.value, e.target.id)
  },
  render: function(){
    return (
      <select>
        {this.props.options.map(function(option){
          return 
            <option value={option.name || option}>
              {option.value || option}
            </option>
        })}
      </select>
    )
  }
})

export default DropDownAg
