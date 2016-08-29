import { expect } from 'chai'
import reservationsReducer from '../imports/reducers/reservations'
import actionTypes from '../imports/actionsTypes'

describe('reducers.reservations', function() {
	describe('default state', function() {
   	it('initializes empty object for selected reservation', function () {
			let action = { type: 'unknown' }
			let newState = reservationsReducer(undefined , action)
			expect(newState.reservation).to.deep.equal({})
  	})
		it('initializes empty array for reservations', function () {
			let action = { type: 'unknown' }
			let newState = reservationsReducer(undefined , action)
			expect(newState.reservations).to.deep.equal([])
    })
	})
})

