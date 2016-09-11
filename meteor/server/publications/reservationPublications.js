import {Content, Comments} from '/imports/collections';
import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check';
import { reservationGridDto } from '../../imports/dtos/reservationDtos'
import Reservations from '../../imports/collections/reservationsCollection'

export default function () {
  Meteor.publish('doc', function (id) {
    return Reservations.find(filters, dto);
  });

  Meteor.publish('reservations', function (filters = {}, dto = {}) {
    return Reservations.find(filters, dto);
  });
}
