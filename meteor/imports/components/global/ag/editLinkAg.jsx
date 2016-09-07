import React, { PropTypes, Component } from 'react'

const Menu = React.createClass({
  propTypes: {
    params: PropTypes.shape({
      onSelect: PropTypes.func.isRequired
    })
  },
  handleClick(e, data) {
		debugger
  },
  render() {
    return (
      <a href="#" onClick={this.handleClick}>Edit</a>
    )
  }
})

export default Menu
