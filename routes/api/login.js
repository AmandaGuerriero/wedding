const router = require("express").Router();
const login = require("../../controllers/login");

router.route("/login", login)
.post(login.authenticate);

module.exports = router;