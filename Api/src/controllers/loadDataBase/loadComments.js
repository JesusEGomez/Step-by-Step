const comments = require("../../../assets/database/comments.json");
const { Comment, User } = require("../../db.js");

const createComments = async () => {
  try {
    // for (let i = 0; i < 10; i++) {
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];

      const commentData = {
        content: comment.content,
        email: comment.email,
      };

      const createComment = await Comment.create(commentData);

      const foundUser = await User.findOne({
        where: { mail: comment.email },
      });

      //   if (foundUser) {
      //     await createComment.setUser(foundUser.id);
      //   }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = createComments;
