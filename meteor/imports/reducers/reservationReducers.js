import actionTypes from '../actionTypes/reservationActionTypes'

const initialState = {
	reservationsSubscription: null,
	reservationsFilters: {}, 
	reservation: {},
  reservationSelectPending: false,
	reservations: [],
  reservationsQueryPending: false,
  reservationsChangePending: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    //This actionType is temporary
   case actionTypes.subscription.request:
      return Object.assign({}, state, {
        reservationsSubscriptionPending: true
      })
    case actionTypes.subscription.ready:
      return Object.assign({}, state, {
        reservationsSubscriptionPending: false,
        reservations: action.payload
      })
    case actionTypes.subscription.failure:
      return Object.assign({}, state, {
        reservationsSubscriptionPending: false
      })

    case actionTypes.queried:
      return Object.assign({}, state, {
        reservations: action.reservations
      })
    case actionTypes.select.request:
      return Object.assign({}, state, {
        reservationSelectPending: true
      })
    case actionTypes.select.success:
      return Object.assign({}, state, {
        reservationSelectPending: false,
        reservation: action.payload,
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
        reservations: action.payload
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
        reservation: action.payload
      })
    case actionTypes.change.failure:
      return Object.assign({}, state, {
        reservationsChangePending: false
      })
    default:
      return state
  }
}

