const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const scoreRoutes = require("./score");
const logInRoutes = require("./login");

router.use("/login", logInRoutes);
router.use("/user", userRoutes);
router.use("/score", scoreRoutes);

module.exports = router;