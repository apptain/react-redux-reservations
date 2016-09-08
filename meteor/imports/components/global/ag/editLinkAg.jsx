import React from 'react'
import Modal from '../modal'
import Form from '../form'

const EditLinkAg = React.createClass({
  // propTypes: {
  //   params: PropType.shape({
  //     onClick: PropTypes.function.isRequired
  //   })
  // },
  handleClick(e, data) {
    debugger
  },
  render() {
    return (
      <a
        href="#"
        id={this.props.params.data._id}
        key={this.props.params.data._id}
        onClick={this.handleClick}
      >Edit</a>
    )
  }
})

export default EditLinkAg
