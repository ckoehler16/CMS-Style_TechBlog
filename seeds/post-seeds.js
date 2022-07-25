const { Post } = require('../models');

const postData = [
    {
        title: "Test Post 1",
        post_content: "Content for Test Post 1",
        user_id: 2
    },
    {
        title: "Test Post 2",
        post_content: "Content Test Post 2",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;