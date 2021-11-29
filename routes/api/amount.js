const router = require("express").Router();
const amountController = require("../../controllers/amountController");

// Matches with "/api/bears"
router.route("/")
  .get(amountController.findAll)

module.exports = router;
