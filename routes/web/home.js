const router = require('express').Router();
const { Blog, User } = require('../../models');


router.get('/home', (req, res) => {

    Blog.findAll({
        include: [
            {
                model: User
            }
        ]
    })
        .then((blogs) => {
            
            const blogsJson = blogs.map((blog) => blog.toJSON()); 
            
            console.log(blogsJson)
            res.render('blogs', {
                blogs: blogsJson,
            });
        })
    
})

router.get('/loginn', (req, res) => {

    res.render('login', {
        aa: '<p>1234</p>'
    });

});

module.exports = router;
