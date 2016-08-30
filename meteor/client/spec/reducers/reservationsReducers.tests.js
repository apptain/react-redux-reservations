import { expect } from 'chai'
import reservationReducers from '../../../imports/reducers/reservationReducers'
import actionTypes from '../../../imports/actionTypes/reservationActionTypes'
import reservationStubs from '../../../imports/stubs/reservationStubs'

describe('reducers.reservations', function() {
	describe('default state:', function() {
   	it('initializes empty object for selected reservation', function () {
			let action = { type: 'unknown' }
			let newState = reservationReducers(undefined , action)
			expect(newState.reservation).to.deep.equal({})
  	})
		it('initializes empty array for reservations', function () {
			let action = { type: 'unknown' }
			let newState = reservationReducers(undefined , action)
			expect(newState.reservations).to.deep.equal([])
    })
	})
  describe('rest action reducers:',  function () {
    describe('select reducers',  function () {
      //request
      describe(actionTypes.select.request, function () {
        let action = actionTypes.select.request;
        let newState = reservationReducers(action)
        it("sets select request pending state to true", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.select.success, function () {
        let reservationStub = reservationStubs.stubs();
        let action = {
          type: actionTypes.reservationsByAgent.success,
          payload: reservationStub
        }
        let newState = reservationReducers(action)
        it('sets reservation', function () {
          expect(newState.reservation).to.deep.equal(reservationStub)
        })
        it("sets select request pending state to false", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
      //failure
      describe(actionTypes.select.failure, function () {
        let action = actionTypes.select.request;
        let newState = reservationReducers(action)
        it("sets select request pending state to true", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
    })
    describe('query reducers',  function () {
      //request
      describe(actionTypes.query.request, function () {
        let action = actionTypes.select.request;
        let newState = reservationReducers(action)
        it("sets query request pending state to true", function () {
          expect(newState.reservationsQueryPending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.query.success, function () {
        let reservationStubs = reservationStubs.stubs(5);
        let action = {
          type: actionTypes.reservationsByAgent.success,
          payload: reservationStubs
        }
        let newState = reservationReducers(action)
        it('sets reservation', function () {
          expect(newState.reservation).to.deep.equal(reservationStub)
        })
        it("sets query request pending state to false", function () {
          expect(newState.reservationsQueryPending).to.deep.equal(true)
        })
      })
      //failure
      describe(actionTypes.query.failure, function () {
        let action = actionTypes.select.request;
        let newState = reservationReducers(action)
        it("sets query request pending state to true", function () {
          expect(newState.reservationsQueryPending).to.deep.equal(true)
        })
      })
    })
    describe('change reducers',  function () {
      //request
      describe(actionTypes.change.request, function () {
        let action = actionTypes.select.request;
        let newState = reservationReducers(action)
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
        let newState = reservationReducers(action)
        it('sets reservation', function () {
          expect(newState.reservation).to.deep.equal(reservationStub)
        })
        it("sets change request pending state to false", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
      //failure
      describe(actionTypes.change.failure, function () {
        let action = actionTypes.select.request;
        let newState = reservationReducers(action)
        it("sets change request pending state to true", function () {
          expect(newState.reservationsSelectPending).to.deep.equal(true)
        })
      })
    })
  })
})

