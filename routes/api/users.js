const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");

// authentication routes
router.post("/signup", usersController.signup);
router.post("/login", passport.authenticate("local"), usersController.login);
router.get("/logout", usersController.logout);
router.get("/", usersController.getUserData); // for seeing who is logged in

router.put("/color", usersController.updateColor);

module.exports = router;