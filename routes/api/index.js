const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");
const scoreRoutes = require("./score");
// const logInRoutes = require("./login")

//router.use("/login", logInRoutes);
router.use("/user", userRoutes)
router.use("/score", scoreRoutes)

// render the html page
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;