const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");

// authentication routes
router.post("/signup", usersController.signup);
router.post("/login", passport.authenticate("local"), usersController.login);
router.get("/logout", usersController.logout);
router.get("/name", usersController.getUsername); // for seeing who is logged in

module.exports = router;