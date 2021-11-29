const router = require("express").Router();
const bearsController = require("../../controllers/bearsController");
const tracyController = require("../../controllers/tracyController")

// Matches with "/api/bears"
router.route("/bears")
  .get(bearsController.findAll)
  .post(bearsController.create);

router.route("/bears/:id")
  .delete(bearsController.delete);

// Matches with "/api/tracy-arm"
router.route("/tracy")
  .get(tracyController.findAll)
  .post(tracyController.create);

router.route("/tracy/:id")
  .delete(tracyController.delete);


module.exports = router;
