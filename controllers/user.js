const db = require("../models");

// Defining methods for the updatesController
module.exports = {
  // Updates Controllers
  findAll: function(req, res) {
    db.user
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.user
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    db.user
      .findOne(req.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}