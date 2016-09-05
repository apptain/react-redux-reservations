import React from 'react'
import Modal from '../overlays/modal.jsx'
import Form from './form.jsx';

const Menu = React.createClass({
  propTypes: {
    options: PropTypes.array.isRequired,
    onSelect: PropTypes.function.isRequired
  },
  editDetail: function(e){
    
  }, 
  handleClick(e, data) {
    this.props.overlayAdd(
      'content',
      <Modal id='content' overlayRemove={this.props.overlayRemove}>
        <ContentForm {...this.props} />
      </Modal>
    );
  },
  render() {
    return (
      <ContextMenu identifier="ContextMenu" >
        <MenuItem onClick={this.handleClick} data={{item: "item 1"}}>Edit</MenuItem>
      </ContextMenu>
    );
  }
});

export default Menu;
