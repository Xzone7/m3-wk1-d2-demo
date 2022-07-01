var express = require("express");
var router = express.Router();

router.get("/home", function(req, res) {
  res.send("Hellow World");
})

router.post("/home", function(req, res) {
  res.send("You just call the post method at '/hello'!\n'");
})

module.exports = router;