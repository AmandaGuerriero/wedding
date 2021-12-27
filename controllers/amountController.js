const db = require("../models");

// Defining methods for the amountsController
module.exports = {
  
  // Amounts Controllers
  findAll: function(req, res) {
    db.bears.aggregate([{
        "$group": {
            "_id": null,
            "totalAlaska": {
                "$sum": "$alaskaAmount"
            },
            "totalBears": {
                "$sum": "$amount"
            },
            "totalTracy": {
                "$sum": "$tracyAmount"
            },
            "totalKayak": {
                "$sum": "$kayakAmount"
            },
            "totalTram": {
                "$sum": "$tramAmount"
            },
            "totalSalmon": {
                "$sum": "$salmonAmount"
            },
            "totalHawaii": {
                "$sum": "$hawaiiAmount"
            },
            "totalPoke": {
                "$sum": "$pokeAmount"
            },
            "totalBeer": {
                "$sum": "$beerAmount"
            },
            "totalSnorkel": {
                "$sum": "$snorkelAmount"
            },
            "totalMamas": {
                "$sum": "$mamasAmount"
            },
            "totalWailea": {
                "$sum": "$waileaAmount"
            }
        }
    }, 
    {
        "$project": {
            "_id": 0
        }
    }])
    .then(response => {
        res.status(200).send(response)
    }).catch(e => res.status(400).send())
  }
}