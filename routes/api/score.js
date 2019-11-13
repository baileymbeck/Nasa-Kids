const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/score"
router.route("/")
  .get(userController.findAll) //find all entries 
  .post(userController.create);  //creating a new game entry object to post to DB


// Matches with "/api/score/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);



module.exports = router;