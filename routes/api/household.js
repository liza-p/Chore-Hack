const router = require("express").Router();
const householdController = require("../../controllers/householdController");

// matches with "/api/household"
router.route("/").get(householdController.getInfo);
// matches with "/api/household/users"
router.route("/users").get(householdController.findMembers);
// matches with "/api/household/invite-code"
router.route("/invite-code").get(householdController.getInviteCode);
// matches with "/api/household/join"
router.route("/join").put(householdController.joinHousehold);

module.exports = router;