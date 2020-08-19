const router = require("express").Router();
const householdController = require("../../controllers/householdController");


// matches with "/api/household/users"
router.route("/users").get(householdController.findAll);
// matches with "/api/household/invite"
router.route("/invite").get(householdController.findOne);
// matches with "/api/household/join"
router.route("/join").put(householdController.update);

module.exports = router;