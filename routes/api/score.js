const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");

// Matches with "/api/score"
router.route("/")
  .get(scoreController.findAll) //find all entries 
  .post(scoreController.create);  //creating a new game entry object to post to DB


// Matches with "/api/score/:id"
router
  .route("/:id")
  .get(scoreController.findById)



module.exports = router;