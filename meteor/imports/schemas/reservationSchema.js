import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const ReservationSchema = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  },
  dateTime: {
    type: Date,
    label: "Date & Time",
    autoform: {
      afFieldInput: {
        type: 'bootstrap-datetimepicker'
      }
    }
  },
  name: {
    type: String,
    optional: true
  },
  partyNumber: {
    type: Number,
    label: "#"
  },
  status: {
    type: String,
    allowedValues: ['active', 'fulfilled', 'canceled'],
    autoform: {
      type: 'hidden'
    }
  },
  dateCreated: {
    type: Date,
    optional: true,
    autoform: {
      type: 'hidden'
    }
  }
});


export default ReservationSchema;
