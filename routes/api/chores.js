const router = require("express").Router();
const choresController = require("../../controllers/choresController");

// Matches with "/api/chores"
router
  .route("/")
  .get(choresController.findAll) // get all chores
  .post(choresController.create); // create a chore

// matches with /api/chores/:id
router
  .route("/:id")
  .put(choresController.update) //update a chore
  .delete(choresController.remove); // delete a book

module.exports = router;