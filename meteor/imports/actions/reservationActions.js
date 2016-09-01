import { CALL_API } from 'redux-api-middleware'
import actionTypes from '../actionTypes/reservationActionTypes'
import settings from '../settings'

//Cool that current and past tense of Read are the same
export function reservationsQueried(reservations){
  return {
    type: actionTypes.queried,
    reservations: reservations
  }
}

export function reservationsSelect() {
  return {
    [CALL_API]: {
      method: 'get',
      endpoint: settings.apiUrl + '/methods/reservations/select',
			headers: { 'Content-Type': 'application/json' },
      types: [
        actionTypes.select.request,
        actionTypes.select.success,
        actionTypes.select.failure,
      ]
    }
  }
}

export function reservationsQuery(filters) {
  return {
    [CALL_API]: {
      method: 'get',
      endpoint: settings.apiUrl + '/publications/reservations/filtered',
      body: JSON.stringify(filters),
      headers: { 'Content-Type': 'application/json' },
      types: [
        {
          type: actionTypes.query.request,
          meta: { filters }
        },
        {
          type: actionTypes.query.success,
          meta: { filters }
        },
        {
          type: actionTypes.query.failure,
          meta: { filters }
        }
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
        actionTypes.reservationsChangeRequest.request,
        actionTypes.reservationsChangeRequest.success,
        actionTypes.reservationsChangeRequest.failure,
      ]
    }
  }
}

