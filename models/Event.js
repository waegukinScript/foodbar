const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  emailAddress: String,
  phoneNumber: String,
  reservationDate: String,
  reservationTime: String,
  selectEvent: String,
  createdAt: String
}, { timestamps: true });


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
