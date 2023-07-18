const { Comment } = require("../../db.js");

const createComment = async (content) => {
  try {
    console.log(content);
    const createdComment = await Comment.create({ content });
  } catch (error) {
    console.error("Error creating orders:", error);
  }
};

module.exports = createComment;
