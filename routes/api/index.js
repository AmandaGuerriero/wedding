const router = require("express").Router();
const rsvpRoutes = require("./rsvp");
const updatesRoutes = require("./updates");

// RSVP routes
router.use("/rsvp", rsvpRoutes);

// RSVP routes
router.use("/updates", updatesRoutes);

module.exports = router;
