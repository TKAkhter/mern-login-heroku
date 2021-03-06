const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt-inzi");
const jwt = require("jsonwebtoken");
// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

const SECRET = process.env.SECRET || "12345";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true,
  })
);

app.use("/", express.static(path.join(__dirname, "/view/build")));
// app.use(express.static(path.join(__dirname, "view/build")));

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
  created: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", {
  title: String,
  description: String,
  firstName: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) =>
  console.log(`mongoose error ${error.message}`)
);

app.post("/api/v1/user", (req, res) => {
  // Bcrypt

  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.firstName ||
    !req.body.lastName
  ) {
    console.log("required field missing");
    res.status(403).send("required field missing");
    return;
  } else {
    User.findOne(
      {
        email: req.body.email,
      },
      (err, user) => {
        if (user) {
          res.send("user already exist");
        } else {
          console.log(req.body);
          bcrypt.stringToHash(req.body.password).then((passwordHash) => {
            console.log("hash: ", passwordHash);

            let newUser = new User({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: passwordHash,
            });
            newUser.save(() => {
              console.log("data saved");
              res.send("profile created");
            });
          });
        }
      }
    );
  }
});

app.post("/api/v1/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    console.log("required field missing");
    res.status(403).send("required field missing");
    return;
  }
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) {
        res.status(500).send("error in getting database");
      } else {
        if (user) {
          bcrypt
            .varifyHash(req.body.password, user.password)
            .then((result) => {
              if (result) {
                var access_token = jwt.sign(
                  {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    _id: user._id,
                  },
                  SECRET
                );
                console.log("token created: ", access_token);
                res.cookie("access_token", access_token, {
                  httpOnly: true,
                  // expires: (new Date().getTime + 300000), //5 minutes
                  maxAge: 300000,
                });
                res.send({
                  access_token: access_token,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  _id: user._id,
                });
              } else {
                res.status(401).send("Authentication fail");
              }
            })
            .catch((e) => {
              console.log("error: ", e);
            });
        } else {
          res.send("user not found");
        }
      }
    }
  );
});

app.use((req, res, next) => {
  const access_token = req.cookies.access_token;
  console.log("Cookie: ", access_token);
  if (!access_token) {
    return res.sendStatus(403);
  }
  jwt.verify(access_token, SECRET, function (err, decoded) {
    console.log("decoded: ", decoded); // bar
    req.body._decoded = decoded;

    if (!err) {
      next();
    } else {
      res.sendStatus(403);
    }
  });
});

// get the cookie incoming request
app.get("/api/v1/getcookie", (req, res) => {
  //show the saved cookies
  console.log(req.cookies);
  res.send(req.cookies);
});

app.post("/api/v1/logout", (req, res, next) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    maxAge: 300000,
  });
  res.send();
});

app.get("/api/v1/user", (req, res) => {
  User.find({}, (err, data) => {
    res.send(data);
  });
});

app.get("/api/v1/profile", (req, res) => {
  User.findOne({ email: req.query.email }, (err, user) => {
    if (err) {
      res.status(500).send("error in getting database");
    } else {
      if (user) {
        res.send({
          name: user.name,
          email: user.email,
          _id: user._id,
        });
      } else {
        res.send("user not found");
      }
    }
  });
});

app.delete("/api/v1/profile", (req, res) => {
  res.send("profile deleted");
});

app.post("/api/v1/post", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
    firstName: req.body.firstName,
  });
  newPost.save().then(() => {
    console.log("Post created");
    res.send("Post created");
  });
});

app.delete("/api/v1/post", (req, res) => {
  Post.deleteOne({ _id: req.body.id }, (err, data) => {
    res.send("Post deleted");
  });
});

app.get("/api/v1/post", (req, res) => {
  Post.find({})
    .sort({ created: "desc" })
    .exec(function (err, data) {
      res.send(data);
    });
});

app.get("/**", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./view/build/index.html"));
  // res.redirect("/")
});

module.exports = app;
