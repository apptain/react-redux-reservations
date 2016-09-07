export function overlayAdd(id, component, blur = true, route = null) {
  //Would be good place to handle routing
  return {
    type: 'OVERLAY_ADD',
    id,
    blur,
    component
  }
}

export function overlayRemove(id) {
  return {
    type: 'OVERLAY_REMOVE',
    id
  }
}
