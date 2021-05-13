const router = require("express").Router();
const rsvpRoutes = require("./rsvp");
const updatesRoutes = require("./updates");
const loginRoutes = require("./login");

// RSVP routes
router.use("/login", loginRoutes);

// RSVP routes
router.use("/rsvp", rsvpRoutes);

// Updates routes
router.use("/updatesAmandaEric05300716", updatesRoutes);

module.exports = router;
