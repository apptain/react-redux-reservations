import React, {PropTypes} from 'react'
import Animate from './animate'

const Modal = React.createClass({
  propTypes: {
    onClose: PropTypes.func,
    children: PropTypes.node
  },
  close(e) {
    this.props.onClose(e)
  },
  render: function() {
    return (
      <div className="window-wrap">
        <div className="window-dialog">
          <div className="window-header">
            <h2></h2>
            <div className='modal-close' onClick={this.close}>
              <i aria-hidden="true">x</i>
            </div>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
          <div className="window-footer">
          </div>
        </div>
      </div>
    )
  }
})

export default Modal
