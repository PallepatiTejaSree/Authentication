const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/ITA", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Success: mongodb connected successfully");
  })
  .catch((err) => {
    console.log("Error: mongodb connection");
  });

const db = mongoose.connection;

const User = mongoose.model("users", {
  username: String,
  password: String,
});

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username })
      .exec()
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.get("/", (req, res) => {
  res.render("login", {
    title: "Home",
    message: "Welcome to Express Auth",
  });
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    console.log("Authenticating user: ", user);
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("User not found");
      return res.redirect("/");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      console.log("User logged in : ", user);
      return res.redirect("/dashboard");
    });
  })(req, res, next);
});

app.get("/dashboard", isAuthenticated, (req, res) => {
  res.render("dashboard", { user: req.user });
});

app.get("/logout", (req, res) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
