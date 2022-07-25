const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 2,
        comment_text: "This is a test comment for post 2"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This is a test comment as well."
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "This is a test comment."
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;