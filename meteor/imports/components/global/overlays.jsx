import React, {PropTypes} from 'react'
import Overlay from './overlay.jsx'

const Overlays = React.createClass({
  propTypes: {
    overlays: PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div>
        {this.props.overlays.map(this.renderOverlay, this)}
      </div>
    )
  },
  renderOverlay: function(overlay) {
    var result
      result = overlay.component
    return result
  }
})

export default Overlays
