import React from 'react'
import Modal from '../modal'
import Form from '../form'

const Menu = React.createClass({
  propTypes: {
    params: PropTypes.shape({
      onSelect: PropTypes.function.isRequired
    })
  },
  handleClick(e, data) {
    this.props.overlayAdd(
      'content',
      <Modal id='content' overlayRemove={this.props.overlayRemove}>
        <Form {...this.props} />
      </Modal>
    )
  },
  render() {
    return (
      <a href="#" onClick={this.handleClick}>Edit</a>
    )
  }
})

export default Menu
