import { CALL_API } from 'redux-api-middleware'
import actionTypes from '../actionTypes/reservationActionTypes'
import settings from '../settings'
import Reservations from '../collections/reservationsCollection'

//Cool that current and past tense of Read are the same
export function reservationsQueried(reservations){
  return {
    type: actionTypes.queried,
    reservations: reservations
  }
}

export function subscribe(subscription, filters, columns) {
	const subscription = Meteor.subscribe(subscription, filters, columns)
	const subscriber = function(subscription) {
		Meteor.autorun(() => {
      if(subscription.ready()){
        return Reservations.find())
      }
   	})
	} 
	return {
		type: actionTypes.subscriptions.subscribe,
		subscriber: subscriber(subscription)
	} 
}

export function select() {
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

export function query(filters) {
  return {
  	 
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
        actionTypes.change.request,
        actionTypes.change.success,
        actionTypes.change.failure,
      ]
    }
  }
}

