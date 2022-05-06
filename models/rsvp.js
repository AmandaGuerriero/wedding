const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rsvpSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  emailAddress: {
    type: String
  },
  attending: { 
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
  },
  welcome: {
    type: Boolean
  },
  breakfast: {
    type: Boolean
  }
});

const rsvp = mongoose.model("RSVP", rsvpSchema);

module.exports = rsvp;
