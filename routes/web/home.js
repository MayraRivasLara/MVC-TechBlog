const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');


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

module.exports = router;
