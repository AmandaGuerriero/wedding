const router = require("express").Router();
const updatesController = require("../../controllers/updatesController");

// Matches with "/api/updates"
router.route("/")
  .get(updatesController.findAll)
  .post(updatesController.create);

module.exports = router;
