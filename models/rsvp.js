const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  emailAddress: {
    type: String,
    required: true
  },
  attending: { 
    type: String
  },
  attendDetails: {
    type: String
  },
  accom: {
    type: String
  },
  food: {
    type: String
  },
  diet: {
    type: String
  }
});

const rsvp = mongoose.model("RSVP", rsvpSchema);

module.exports = rsvp;
