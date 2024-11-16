const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to the magnificient ultimate movies api!");
});

router.get("/movies", (req, res) => {
  res.send("Here you'll se movies");
});

module.exports = router;
