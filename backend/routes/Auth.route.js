const router = require("express")();
const { signup } = require("../controllers/Auth.controller");

router.post("/signup", signup)

module.exports = router;