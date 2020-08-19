const router = require("express").Router();
const usersRoutes = require("./users");
const choresRoutes = require("./chores");
const repRoutes = require("./repetitions");
const householdRoutes = require("./household");

router.use("/users", usersRoutes)
router.use("/chores", choresRoutes);
router.use("/repetitions", repRoutes);
router.use("/household", householdRoutes);

module.exports = router;
