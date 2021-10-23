const db = require("../models");

// Defining methods for the amountsController
module.exports = {
  
  // Amounts Controllers
  findAll: function(req, res) {
    db.bears.aggregate([{
        "$group": {
            "_id": null,
            "totalBears": {
                "$sum": "$amount"
            }
        }
    }, {
        "$project": {
            "_id": 0
        }
    }]).then(response => {
        res.status(200).send(response)
    }).catch(e => res.status(400).send())
}
}