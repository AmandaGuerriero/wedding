const router = require("express").Router();
const rsvpController = require("../../controllers/rsvpController");

// Matches with "/api/rsvp"
router.route("/")
  .get(rsvpController.findAll)
  .post(rsvpController.create);

// Matches with "/api/rsvp/:id"
router
  .route("/:id")
  .get(rsvpController.findById)
  .put(rsvpController.update)

module.exports = router;
