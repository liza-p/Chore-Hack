const router = require("express").Router();
const repetController = require("../../controllers/repetController");

// matches with :/api/repetitions"
router
  .route("/")
  .get(repetController.findAll) // get all repetitions
  .put(repetController.update) //update a repetition
  

module.exports = router;