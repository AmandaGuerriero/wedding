const router = require("express").Router();
const rsvpRoutes = require("./rsvp");
const updatesRoutes = require("./updates");
const loginRoutes = require("./login");
const userRoutes = require('./user.js');

// Updates routes
router.use("/updatesAmandaEric05300716", updatesRoutes);

// Login routes
router.use("/login", loginRoutes);

// RSVP routes
router.use("/rsvp", rsvpRoutes);

// User routes
router.use('/users', userRoutes);


module.exports = router;
