const router = require("express").Router();
const login = require("../../controllers/login");

router.route("/login")
.post(login.authenticate);

module.exports = router;