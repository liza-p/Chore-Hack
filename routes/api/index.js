const router = require("express").Router();
const choresRoutes = require("./chores");

// Chores routes
router.use("/chores", choresRoutes);

module.exports = router;