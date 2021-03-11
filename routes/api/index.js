const router = require("express").Router();
const rsvpRoutes = require("./rsvp");

// RSVP routes
router.use("/rsvp", rsvpRoutes);

module.exports = router;
