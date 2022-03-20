const { User, Blog, Comment } = require('../../models');
const { sequelize } = require('../../config/connect');
const {faker} = require('@faker-js/faker');


function createUser(){

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();


    return User.create({
        name: firstName + ' ' + lastName,
        email: faker.internet.email(firstName, lastName),
        password: 'password',
    });

};

function createBlog(user) {

    return Blog.create({
        
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraphs(),
        user_id: user.id,

    });
};


function createComment(user, blog) {

    return Comment.create({
        
        body: faker.lorem.paragraphs(1),
        user_id: user.id,
        blog_id: blog.id,

    });
};


async function seedDatabase() {

    const createdUsers = [];
    const createdBlogs = [];
    const createdComments = [];


    // Truncate function to avoid tables to get too crowded.
    // await sequelize.sync({ force: true });
    // console.log("All models were synchronized successfully!");
    
    // Seed users' table
    for (let index = 0; index < 5; index++) {
       const createdUser = await createUser();

       createdUsers.push(createdUser);
        
    };

    
    // Seed blogs' table
    for (let index = 0; index < 5; index++) {
       
        const createdBlog = await createBlog(
            faker.random.arrayElement(createdUsers));

        createdBlogs.push(createdBlog);
        
    }
    
    // Seed comments' table
    for (let index = 0; index < 2; index++) {
       
        const createdComment = await createComment(
            faker.random.arrayElement(createdUsers),
            faker.random.arrayElement(createdBlogs),
            );

        createdComments.push(createdComment);
        
    };


}

seedDatabase();