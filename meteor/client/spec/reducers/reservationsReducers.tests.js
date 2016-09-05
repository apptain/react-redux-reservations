import { expect } from 'chai'
import reservationReducers from '../../../imports/reducers/app/reservationReducers'
import actionTypes from '../../../imports/actionTypes/app/reservationActionTypes'
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
        let action =  {type: actionTypes.select.request}
        let newState = reservationReducers(undefined, action)
        it("sets select request pending state to true", function () {
          expect(newState.reservationSelectPending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.select.success, function () {
        let reservationStub = reservationStubs.stub()
        let action = {
          type: actionTypes.select.success,
          payload: reservationStub
        }
        let newState = reservationReducers(undefined, action)
        it('sets reservation', function () {
          expect(newState.reservation).to.deep.equal(reservationStub)
        })
        it("sets select request pending state to false", function () {
          expect(newState.reservationSelectPending).to.deep.equal(false)
        })
      })
      //failure
      describe(actionTypes.select.failure, function () {
        let action = { type: actionTypes.select.failure }
        let newState = reservationReducers(undefined, action)
        it("sets select request pending state to false", function () {
          expect(newState.reservationSelectPending).to.deep.equal(false)
        })
      })
    })
    describe('query reducers',  function () {
      //request
      describe(actionTypes.query.request, function () {
        let action = { type: actionTypes.query.request }
        let newState = reservationReducers(undefined, action)
        it("sets query request pending state to true", function () {
          expect(newState.reservationsQueryPending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.query.success, function () {
        let reservationStubArray = reservationStubs.stubs(5)
        let action = {
          type: actionTypes.query.success,
          payload: reservationStubArray
        }
        let newState = reservationReducers(undefined, action)
        it('sets reservation', function () {
          expect(newState.reservations).to.deep.equal(reservationStubArray)
        })
        it("sets query request pending state to false", function () {
          expect(newState.reservationsQueryPending).to.deep.equal(false)
        })
      })
      //failure
      describe(actionTypes.query.failure, function () {
        let action = { type: actionTypes.change.failure }
        let newState = reservationReducers(undefined, action)
        it("sets query request pending state to true", function () {
          expect(newState.reservationsQueryPending).to.deep.equal(false)
        })
      })
    })
    describe('change reducers',  function () {
      //request
      describe(actionTypes.change.request, function () {
        let action = { type: actionTypes.change.request }
        let newState = reservationReducers(undefined, action)
        it("sets change request pending state to true", function () {
          expect(newState.reservationsChangePending).to.deep.equal(true)
        })
      })
      //success
      describe(actionTypes.change.success, function () {
        let reservationStub = reservationStubs.stub()
        let action = {
          type: actionTypes.change.success,
          payload: reservationStub
        }
        let newState = reservationReducers(undefined, action)
        it('sets reservation', function () {
          expect(newState.reservation).to.deep.equal(reservationStub)
        })
        it("sets change request pending state to false", function () {
          expect(newState.reservationsChangePending).to.deep.equal(false)
        })
      })
      //failure
      describe(actionTypes.change.failure, function () {
        let action = { type: actionTypes.change.failure }
        let newState = reservationReducers(undefined, action)
        it("sets change request pending state to true", function () {
          expect(newState.reservationsChangePending).to.deep.equal(false)
        })
      })
    })
  })
})

