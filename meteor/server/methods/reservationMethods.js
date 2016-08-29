import {Content, Comments} from '/imports/collections';
import actionTypes from '../../imports/actionTypes'

export default function () {
  SimpleRest.setMethodOptions('reservations/upsert', options);

  Meteor.methods({
    'reservationsupsertRequest': function (reservations, upsertRequest, params){
      var upsertFunction;
      //TODO Add Checks
      switch (upsertRequest) {
        case actionTypes.reservationActionIniators.fulfill:
          upsertFunction = function (reservation) {
            //TODO Check _id
            return reservations.update({'_id': reservation._id},
              {status: "canceled"});
          }
        case actionTypes.reservationActionIniators.cancel:
          upsertFunction = function (reservation) {
            //TODO Check _id
            return reservations.update({'_id': reservation._id},
              {status: "canceled"});
          }
        default:
          //TODO throw exception
      }
      if (Array.isArray(reservations)) {
        reservations.forEach(function(reservation){
          reserveration = upsertFunction(reservation);
        })
      } else {
        //We are assuming it's an object. Will add checks to insure
        reservations = upsertFunction(reservations);
      }
      return reservations;
    },
    'reservationsUpsert': function (reservations){
      var upsertFunction = function (reservation) {
          return reservations.update({'_id': reservation._id},
              {status: "canceled"}, {upsert: "true"});
      }
      if (Array.isArray(reservations)) {
        reservations.forEach(function(reservation){
          reserveration = upsertFunction(reservation);
        })
      } else {
        //We are assuming it's an object. Will add checks to insure
        reservations = upsertFunction(reservations);
      }
      return reservations;
    }
  });
}
