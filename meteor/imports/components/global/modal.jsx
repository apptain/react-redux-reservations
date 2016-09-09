import React, {PropTypes} from 'react'
import Animate from './animate'

const Modal = React.createClass({
  propTypes: {
    onClose: PropTypes.func,
    children: PropTypes.node
  },
  close(event) {
    event.preventDefault()
    this.props.onClose && this.props.onClose()
  },
  render() {
		debugger
    return (
      <div className='modal'>
        <Animate transition='fadeIn'>
          <div className='modal-background'></div>
        </Animate>
        <Animate>
          <div className='modal-wrapper'>
            <div className='modal-close' onClick={this.props.onClose}>
              <i className='material-icons'>close</i>
              <span>Close</span>
            </div>
            <div className='modal-content-wrapper'>
              {this.props.children}
            </div>
          </div>
        </Animate>
      </div>
    )
  }
})

export default Modal
