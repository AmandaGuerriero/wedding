const router = require("express").Router();
const bearsController = require("../../controllers/bearsController");

// Matches with "/api/bears"
router.route("/bears")
  .get(bearsController.findAll)
  .post(bearsController.create);

// // Matches with "/api/alaska"
// router.route("/alaska")
//   .get(giftController.findAll)
//   .post(giftController.create);

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
