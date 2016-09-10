import actionTypes from '../../actionTypes/global'

const initialState = {
	doc: {},
  docSelectPending: false,
	docs: [],
  docsQueryPending: false,
  docsChangePending: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    //publication
    case actionTypes.docs.queried:
      return Object.assign({}, state, {
        docs: action.docs
      })
    case actionTypes.docs.select.request:
			debugger
      return Object.assign({}, state, {
        docSelectPending: true
      })
    case actionTypes.docs.select.success:
			debugger
      return Object.assign({}, state, {
        docSelectPending: false,
        doc: action.payload,
      })
    case actionTypes.docs.select.failure:
      return Object.assign({}, state, {
        docSelectPending: false
      })
    case actionTypes.docs.query.request:
      return Object.assign({}, state, {
        docsQueryPending: true
      })
    case actionTypes.docs.query.success:
      return Object.assign({}, state, {
        docsQueryPending: false,
        docs: action.payload
      })
    case actionTypes.docs.query.failure:
      return Object.assign({}, state, {
        docsChangePending: false
      })
    case actionTypes.docs.change.request:
      return Object.assign({}, state, {
        docsChangePending: true
      })
    case actionTypes.docs.change.success:
      return Object.assign({}, state, {
        docsChangePending: false,
        doc: action.payload
      })
    case actionTypes.docs.change.failure:
      return Object.assign({}, state, {
        docsChangePending: false
      })
    default:
      return state
  }
}

