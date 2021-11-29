const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bearsSchema = new Schema({
  name: { 
    type: String, 
    required: false 
  },
  amount: { 
    type: Number,
    required: false
  },
  tracyName: { 
    type: String,
    required: false
  },
  tracyAmount: { 
    type: Number,
    required: false
  },
});


const bears = mongoose.model("BEARS", bearsSchema);

module.exports = bears;
