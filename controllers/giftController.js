const db = require("../models");

// Defining methods for the giftController
module.exports = {
  
  // Gifts Controllers
  findAll: function(req, res) {
    db.gifts
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.rsvp
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.gifts
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.rsvp
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  delete: function(req, res) {
    db.rsvp
      .findOneAndDelete(req.params.name)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
