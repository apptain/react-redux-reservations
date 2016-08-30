import { expect } from 'chai'
import reservationsReducer from '../imports/reducers/reservations'
import actionTypes from '../imports/actionsTypes'
import reservationStubs from '../imports/reservationStubs'

describe('reducers.reservations', function() {
	describe('default state:', function() {
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
  describe('rest action reducers:',  function () {
    describe('select',  function () {
      //request
      describe(actionTypes.select.request, function () {
        let action = actionTypes.reservationFiltered.request;
        let newState = reservationsReducer(action)
        it("sets select request pending state to true", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.select.success, function () {
        let reservationStub = reservationStubs.stub();
        let action = {
          type: actionTypes.reservationsByAgent.success,
          payload: reservationStub
        }
        let newState = reservationsReducer(action)
        it('sets reservation', function () {
          expect(newState.reservation).to.deep.equal(reservationStub)
        })
        it("sets select request pending state to false", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
      //failure
      describe(actionTypes.select.failure, function () {
        let action = actionTypes.reservationFiltered.request;
        let newState = reservationsReducer(action)
        it("sets select request pending state to true", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
    })
    describe('change',  function () {
      //request
      describe(actionTypes.change.request, function () {
        let action = actionTypes.reservationFiltered.request;
        let newState = reservationsReducer(action)
        it("sets change request pending state to true", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.change.success, function () {
        let reservationStub = reservationStubs.stub();
        let action = {
          type: actionTypes.reservationsByAgent.success,
          payload: reservationStub
        }
        let newState = reservationsReducer(action)
        it('sets reservation', function () {
          expect(newState.reservation).to.deep.equal(reservationStub)
        })
        it("sets change request pending state to false", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
      //failure
      describe(actionTypes.change.failure, function () {
        let action = actionTypes.reservationFiltered.request;
        let newState = reservationsReducer(action)
        it("sets change request pending state to true", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
    })
  })
})

