const { Comment, User } = require("../../db.js");

const createComment = async ({ content, email }) => {
  try {
    console.log("controller", content, email);

    const createComment = await Comment.create({ content: content });

    const foundUser = await User.findOne({
      where: { mail: email },
    });

    if (foundUser) {
      await createComment.setUser(foundUser.id);
    }
    // await createComment.setUser(email);
  } catch (error) {
    console.error("Error creating orders:", error);
  }
};

module.exports = createComment;
