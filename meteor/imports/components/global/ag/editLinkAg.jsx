import React from 'react'
import Modal from '../modal'
import Form from '../form'

const EditLinkAg = React.createClass({
  handleClick(e, data) {
  	this.props.params.node.setSelected(true)
	},
  render() {
    return (
      <a
        href="#"
        key={this.props.params.data._id}
        onClick={this.handleClick}
      >Edit</a>
    )
  }
})

export default EditLinkAg
