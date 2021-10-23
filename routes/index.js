var express = require("express");
var router = express.Router();

/* GET home page. */
router.use("/", function (req, res, next) {
  res.render("index");
});

router.post("/api/v1/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    console.log("required field missing");
    res.status(403).send("required field missing");
    return;
  }

  console.log("req.body: ", req.body);

  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      res.status(500).send("error in getting database");
    } else {
      if (user) {
        if (user.password === req.body.password) {
          res.send(user);
        } else {
          res.send("Authentication fail");
        }
      } else {
        res.send("user not found");
      }
    }
  });
});

router.post("/api/v1/signup", (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    console.log("required field missing");
    res.status(403).send("required field missing");
    return;
  } else {
    console.log(req.body);

    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    newUser.save(() => {
      console.log("data saved");
      res.send("profile created");
    });
  }
});

router.delete("/api/v1/profile", (req, res) => {
  res.send("profile deleted");
});

module.exports = router;
