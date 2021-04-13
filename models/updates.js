const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const updatesSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  emailAddress: {
    type: String,
    required: true
  }
});

const updates = mongoose.model("UPDATES", updatesSchema);

module.exports = updates;
