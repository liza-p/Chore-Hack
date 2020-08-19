const router = require("express").Router();
const choresRoutes = require("./chores");
const usersRoutes = require("./users");

// Chores routes
router.use("/chores", choresRoutes);
router.use("/users", usersRoutes)

module.exports = router;