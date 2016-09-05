import { CALL_API } from 'redux-api-middleware'
import settings from '../../settings'
import actionTypes from '../../actionTypes'

//Cool that current and past tense of Read are the same
export function reservationsQueried(reservations){
  return {
    type: actionTypes.reservations.queried,
    reservations: reservations
  }
}

export function reservationsSelect() {
  //Handle dialog add
  dispatch({ type: 'GET_USER_REQUEST', id })
  
  //
  return {
    [CALL_API]: {
      method: 'get',
      endpoint: settings.apiUrl + '/methods/reservations/select',
			headers: { 'Content-Type': 'application/json' },
      types: [
        actionTypes.reservations.select.request,
        actionTypes.reservations.select.success,
        actionTypes.reservations.select.failure,
      ]
    }
  }
}

export function reservationsChange(reservations, changeRequests) {
  return {
    [CALL_API]: {
      method: 'post',
      endpoint: settings.apiUrl + '/methods/reservations/change-request',
      body: JSON.stringify(reservations),
      headers: { 'Content-Type': 'application/json' },
      types: [
        actionTypes.reservations.reservationsChangeRequest.request,
        actionTypes.reservations.reservationsChangeRequest.success,
        actionTypes.reservations.reservationsChangeRequest.failure,
      ]
    }
  }
}

