const db = require("../models");

// Defining methods for the updatesController
module.exports = {
  // Updates Controllers
  findAll: function(req, res) {
    db.updates
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.updates
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function({ params }, res) {
    db.updates
      .findOneAndDelete({ _id: params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
}