const router = require("express").Router();
const { Router } = require("express");
const { Blog, User, Comment } = require("../../models");

//

router.get("/", (req, res) => {
  res.redirect("/home");
});

// getting all blogs
router.get("/home", (req, res) => {
  Blog.findAll({
    include: [
      {
        model: User,
      },
    ],
  }).then((blogs) => {
    const blogsJson = blogs.map((blog) => blog.toJSON());

    console.log(blogsJson);
    res.render("blogs", {
      blogs: blogsJson,
      logged_in: req.session.loggedIn,
    });
  });
});

// getting one blog
router.get("/blog/:id", (req, res) => {
  Blog.findByPk({
    include: [
      {
        model: User,
      },
    ],
  }).then((blogs) => {
    const blogsJson = blogs.map((blog) => blog.toJSON());

    console.log(blogsJson);
    res.render("blogs", {
      blogs: blogsJson,
      logged_in: req.session.loggedIn,
    });
  });
});

// login endpoint
router.get("/login", (req, res) => {
  // check  session and redirect to the homepage if exists
  if (req.session.loggedIn) {
    res.redirect("/home");
    return;
  }
  res.render("login", {
    logged_in: req.session.loggedIn,
  });
});

router.post("/login", async (req, res) => {
  console.log("test", req.body);

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.render("login", {
        message: "Incorrect email or password, please try again",
        logged_in: req.session.loggedIn,
      });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.render("login", {
        message: "Incorrect email or password, please try again",
        logged_in: req.session.loggedIn,
      });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.isSoftDeleted;
      req.session.loggedIn = true;

      res.redirect("/");
    });
  } catch (err) {
    res.status(400).json(error);
  }
});

// signup endpoint
router.get("/signup", (req, res) => {
  // check session and redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect("/home");
    return;
  }
  res.render("signup", { logged_in: req.session.loggedIn });
});

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy();
  }

  res.redirect("/home");
});

// router.get("/dashboard", (req, res) => {
//   res.render("login", {
//     aa: "<p>1234</p>",
//   });
// });

// router.get("/signup", (req, res) => {
//   res.render("login", {
//     aa: "<p>1234</p>",
//   });
// });

// router.get("/blog", (req, res) => {
//   res.render("login", {
//     aa: "<p>1234</p>",
//   });
// });

module.exports = router;
