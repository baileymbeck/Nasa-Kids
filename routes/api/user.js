// const router = require("express").Router();
// const userController = require("../../controllers/userController");

// // Matches with "/api/user/login"
// router.route("/login")
//   //.get(userController.findAll)
//   .post(userController.create);

// // Matches with "/api/user/login"
// router.route("/logout")
//   //.get(userController.findAll)
//   .post(userController.create);

// // post to database with username, email, password
// // Matches with "/api/user/register"
// router
//   .route("/register")
//   .post(userController.update)

// // Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

// module.exports = router;

const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

module.exports = router;