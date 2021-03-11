const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  attending: { 
    type: Boolean, 
    required: true 
  },
  accom: {
    type: String
  },
  otherAccom: {
    type: String
  },
  emailAddress: {
    type: String
  },
  food: {
    type: String
  },
});

const rsvp = mongoose.model("RSVP", rsvpSchema);

module.exports = rsvp;
