const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
// const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "view/build")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

mongoose.connect(
  "mongodb+srv://nodejs-prac:nodejs-prac@cluster0.gqhek.mongodb.net/mern-login-heroku?retryWrites=true&w=majority"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  created: { type: Date, default: Date.now },
});

mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) =>
  console.log(`mongoose error ${error.message}`)
);

app.post("/api/v1/login", (req, res) => {
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

app.post("/api/v1/signup", (req, res) => {
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

app.delete("/api/v1/profile", (req, res) => {
  res.send("profile deleted");
});

module.exports = app;