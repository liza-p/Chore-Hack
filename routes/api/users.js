const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");

// authentication routes
router.post("/signup", usersController.signup);
router.post("/login", passport.authenticate("local"), usersController.login);
router.post("/logout", usersController.logout);

module.exports = router;