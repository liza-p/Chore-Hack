const router = require("express").Router();
const choresRoutes = require("./chores");
const repRoutes = require("./repetitions");

// Chores routes
router.use("/chores", choresRoutes);
router.use("/repetitions", repRoutes);

module.exports = router;