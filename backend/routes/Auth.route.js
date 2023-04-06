const router = require("express")();
const { signup ,verify ,signin } = require("../controllers/Auth.controller");

router.post("/signup", signup)
router.post("/verify", verify)
router.post("/signin", signin)

module.exports = router;