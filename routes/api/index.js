const router = require("express").Router();
const usersRoutes = require("./users");
const choresRoutes = require("./chores");
const repRoutes = require("./repetitions");

router.use("/users", usersRoutes)
router.use("/chores", choresRoutes);
router.use("/repetitions", repRoutes);

module.exports = router;
