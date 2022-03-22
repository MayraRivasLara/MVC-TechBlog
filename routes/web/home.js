const router = require("express").Router();
const { Blog, User } = require("../../models");

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
    });
  });
});

router.get("/login", (req, res) => {
//   if (req.session.loggedIn)
    res.render("login", {
      aa: "<p>1234</p>",
    });
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
