import {Content, Comments} from '/imports/collections';
import { Meteor } from 'meteor/meteor';
import {check} from 'meteor/check';
import { reservationGridDto } from '../../imports/dtos/reservationDtos'
import { Reservations } from '../../imports/collections'

export default function () {
  Meteor.publish('reservations', function (filters = {}, dto = {}) {
    console.log('sub');
    return Reservations.find(filters, dto);
  });
}
