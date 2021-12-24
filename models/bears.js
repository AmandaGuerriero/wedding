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
  kayakName: { 
    type: String,
    required: false
  },
  kayakAmount: { 
    type: Number,
    required: false
  },
  pokeName: { 
    type: String,
    required: false
  },
  pokeAmount: { 
    type: Number,
    required: false
  },
  mamasName: { 
    type: String,
    required: false
  },
  mamasAmount: { 
    type: Number,
    required: false
  },
  hawaiiName: { 
    type: String,
    required: false
  },
  hawaiiAmount: { 
    type: Number,
    required: false
  },
  waileaName: { 
    type: String,
    required: false
  },
  waileaAmount: { 
    type: Number,
    required: false
  },
  salmonName: { 
    type: String,
    required: false
  },
  salmonAmount: { 
    type: Number,
    required: false
  },
  alaskaName: { 
    type: String,
    required: false
  },
  alaskaAmount: { 
    type: Number,
    required: false
  },
  beerName: { 
    type: String,
    required: false
  },
  beerAmount: { 
    type: Number,
    required: false
  },
  tramName: { 
    type: String,
    required: false
  },
  tramAmount: { 
    type: Number,
    required: false
  },
  snorkelName: { 
    type: String,
    required: false
  },
  snorkelAmount: { 
    type: Number,
    required: false
  }
});


const bears = mongoose.model("BEARS", bearsSchema);

module.exports = bears;
