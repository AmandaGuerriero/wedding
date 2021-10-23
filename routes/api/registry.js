const router = require("express").Router();
const giftController = require("../../controllers/giftController");

// Matches with "/api/gifts"
router.route("/")
  .get(giftController.findAll)
  .post(giftController.create);

// Below this doesn't work - will need to fix to use
// // Matches with "/api/gifts/:id"
// router
//   .route("/:id")
//   .get(giftController.findById)
//   .put(giftController.update)

// // Matches with "/api/gifts/:name"
// router.route("/:name")
//   .delete(giftController.delete)

module.exports = router;
