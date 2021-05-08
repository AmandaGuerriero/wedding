const router = require("express").Router();
const rsvpRoutes = require("./rsvp");
const updatesRoutes = require("./updates");

// RSVP routes
router.use("/rsvp", rsvpRoutes);

// RSVP routes
router.use("/updatesAmandaEric05300716", updatesRoutes);

module.exports = router;
