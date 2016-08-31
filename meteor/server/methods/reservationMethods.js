import {Content, Comments} from '/imports/collections';
import actionTypes from '../../imports/actionTypes'

export default function () {
  // SimpleRest.setMethodOptions('reservations/change', options);

  Meteor.methods({
    'reservationsChange': function (reservations, changeRequest, params){
      var changeFunction;
      //TODO Add Checks
      switch (changeRequest) {
        case actionTypes.reservationActionIniators.fulfill:
          changeFunction = function (reservation) {
            //TODO Check _id
            return reservations.update({'_id': reservation._id},
              {status: "canceled"});
          }
        case actionTypes.reservationActionIniators.cancel:
          changeFunction = function (reservation) {
            //TODO Check _id
            return reservations.update({'_id': reservation._id},
              {status: "canceled"});
          }
        default:
          //TODO throw exception
      }
      if (Array.isArray(reservations)) {
        reservations.forEach(function(reservation){
          reserveration = changeFunction(reservation);
        })
      } else {
        //We are assuming it's an object. Will add checks to insure
        reservations = changeFunction(reservations);
      }
      return reservations;
    },
    'reservationsUpsert': function (reservations){
      var changeFunction = function (reservation) {
          return reservations.update({'_id': reservation._id},
              {status: "canceled"}, {change: "true"});
      }
      if (Array.isArray(reservations)) {
        reservations.forEach(function(reservation){
          reserveration = changeFunction(reservation);
        })
      } else {
        //We are assuming it's an object. Will add checks to insure
        reservations = changeFunction(reservations);
      }
      return reservations;
    }
  });
}
