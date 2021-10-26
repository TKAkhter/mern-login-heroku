const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(["localhost:3000", "localhost:5000"]));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "view/build")));

app.use("/", express.static(path.join(__dirname, "/web/build")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

mongoose.connect(
  "mongodb+srv://nodejs-prac:nodejs-prac@cluster0.gqhek.mongodb.net/mern-login-heroku?retryWrites=true&w=majority"
);

const User = mongoose.model("User", {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  created: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", {
  text: String,
  author: String,
});

mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) =>
  console.log(`mongoose error ${error.message}`)
);

app.delete("/api/v1/profile", (req, res) => {
  res.send("profile deleted");
});

app.get("/api/v1/user", (req, res) => {
  User.find({}, (err, data) => {
    res.send(data);
  });
});

app.post("/api/v1/user", (req, res) => {
  // Bcrypt
  User.findOne({ email: req.body.email }, (err, data) => {
    if (data?.email) {
      console.log("User Already Exist");
      res.status(403).send("User Already Exist");
      return;
    } else if (!req.body.email || !req.body.password || !req.body.firstName) {
      console.log("required field missing");
      res.status(403).send("required field missing");
      return;
    } else {
      // console.log("Users Added");
      // console.log(req.body);

      // const salt = bcrypt.genSalt(10);
      // const secPass = bcrypt.hash(req.body.password, salt);

      let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        // password: secPass,
        password: req.body.password,
      });
      newUser.save(() => {
        console.log("data saved");
        res.send("profile created");
      });
    }
  });
});

app.post("/api/v1/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    console.log("required field missing");
    res.status(403).send("required field missing");
    return;
  }
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

app.post("/api/v1/post", (req, res) => {
  const newpost = new Post({
    text: req.body.text,
    author: req.body.author,
  });
  newpost.save().then(() => {
    console.log("Post created");
    res.send("Post created");
  });
});

app.get("/api/v1/post", (req, res) => {
  Post.find({}, (err, data) => {
    res.send(data);
  });
});

app.use("/**", (req, res) => {
  // res.redirect("/")
  res.sendFile(path.join(__dirname, "/web/build/index.html"));
});

module.exports = app;
