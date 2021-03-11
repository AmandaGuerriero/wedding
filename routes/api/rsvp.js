const router = require("express").Router();
const rsvpController = require("../../controllers/rsvpController");

// Matches with "/api/rsvp"
router.route("/")
  .get(rsvpController.findAll)
  .post(rsvpController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(rsvpController.findById)
  .put(rsvpController.update)

module.exports = router;
