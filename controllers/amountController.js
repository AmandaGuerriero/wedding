const db = require("../models");

// Defining methods for the amountsController
module.exports = {
  
  // Amounts Controllers
  findAll: function(req, res) {
    db.bears.aggregate(
        [
          {
            $group:
              {
                totalAmount: { $sum: "$amount"}
              }
          }
        ],
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      }
    )
  },

};