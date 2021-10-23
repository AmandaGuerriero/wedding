const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bearsSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  amount: { 
    type: Number,
    required: true
  }
});

const bears = mongoose.model("BEARS", bearsSchema);

module.exports = bears;
