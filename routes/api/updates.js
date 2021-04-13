const router = require("express").Router();
const updatesController = require("../../controllers/updatesController");

// Matches with "/api/updates"
router.route("/")
  .get(updatesController.findAll)
  .post(updatesController.create)

// Matches with "/api/updates/:email
router.route("/:email")
  .delete(updatesController.delete)

module.exports = router;
