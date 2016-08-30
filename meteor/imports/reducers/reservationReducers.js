import actionTypes from '../actionTypes/reservationActionTypes'

const initialState = {
	reservation: {},
  reservationSelectPending: false,
	reservations: [],
  reservationsQueryPending: false,
  reservationsChangePending: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    //This actionType is temporary
    case actionTypes.queried:
      return Object.assign({}, state, {
        reservations: action
      })
    case actionTypes.select.request:
      return Object.assign({}, state, {
        reservationSelectPending: true
      })
    case actionTypes.select.success:
      return Object.assign({}, state, {
        reservationSelectPending: false,
        reservations: action.payload,
        loaded: true
      })
    case actionTypes.select.failure:
      return Object.assign({}, state, {
        reservationSelectPending: false
      })
    case actionTypes.query.request:
      return Object.assign({}, state, {
        reservationsQueryPending: true
      })
    case actionTypes.query.success:
      return Object.assign({}, state, {
        reservationsQueryPending: false,
        reservations: action.payload,
        loaded: true
      })
    case actionTypes.query.failure:
      return Object.assign({}, state, {
        reservationsChangePending: false
      })
    case actionTypes.change.request:
      return Object.assign({}, state, {
        reservationsChangePending: true
      })
    case actionTypes.change.success:
      return Object.assign({}, state, {
        reservationsChangePending: false,
        reservations: action.payload,
        loaded: true
      })
    case actionTypes.change.failure:
      return Object.assign({}, state, {
        reservationsChangePending: false
      })
    default:
      return state
  }
}

