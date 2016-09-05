import actionTypes from '../../actionTypes/app/masterDetailActionTypes'

const initialState = {
  schema: null,
  collection: null,
	doc: {},
  docSelectPending: false,
	docs: [],
  docsQueryPending: false,
  docsChangePending: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    //publication
    case actionTypes.queried:
      return Object.assign({}, state, {
        docs: action.docs
      })
    case actionTypes.select.request:
      return Object.assign({}, state, {
        docSelectPending: true
      })
    case actionTypes.select.success:
      return Object.assign({}, state, {
        docSelectPending: false,
        doc: action.payload,
      })
    case actionTypes.select.failure:
      return Object.assign({}, state, {
        docSelectPending: false
      })
    case actionTypes.query.request:
      return Object.assign({}, state, {
        docsQueryPending: true
      })
    case actionTypes.query.success:
      return Object.assign({}, state, {
        docsQueryPending: false,
        docs: action.payload
      })
    case actionTypes.query.failure:
      return Object.assign({}, state, {
        docsChangePending: false
      })
    case actionTypes.change.request:
      return Object.assign({}, state, {
        docsChangePending: true
      })
    case actionTypes.change.success:
      return Object.assign({}, state, {
        docsChangePending: false,
        doc: action.payload
      })
    case actionTypes.change.failure:
      return Object.assign({}, state, {
        docsChangePending: false
      })
    default:
      return state
  }
}

