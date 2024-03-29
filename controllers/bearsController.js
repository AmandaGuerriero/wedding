const db = require("../models");

// Defining methods for the bearsController
module.exports = {
  
  // Bears Controllers
  findAll: function(req, res) {
    db.bears
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.bears
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function({ params }, res) {
    db.bears
      .findOneAndDelete({ _id: params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
