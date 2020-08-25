const router = require("express").Router();
const choresController = require("../../controllers/choresController");

// Matches with "/api/chores"
router
  .route("/")
  .get(choresController.findAll) // get all chores belonging to user's household
  .post(choresController.create) // create a chore
  .put(choresController.update) //update a chore
  .delete(choresController.remove); // remove a chore

// Matches with "/api/chores/deactivate"
router
  .route("/deactivate")
  .post(choresController.deactivate); // deactivate a chore

module.exports = router;