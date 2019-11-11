const path = require("path");
const router = require("express").Router();
const loginRoutes = require("./login");

router.use("/login", loginRoutes);

// render the html page
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;