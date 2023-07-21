const { Comment } = require("../../db.js");

const createComment = async ({ content, email }) => {
  try {
    console.log("controller", content, email);

    const createComment = await Comment.create({ content });
    await createComment.setUser(email);
  } catch (error) {
    console.error("Error creating orders:", error);
  }
};

module.exports = createComment;
