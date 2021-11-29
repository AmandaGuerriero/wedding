const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tracySchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  amount: { 
    type: Number,
    required: true
  }
});


const tracy = mongoose.model("TRACY", tracySchema);

module.exports = tracy;
