const { Comment, User } = require("../../db");

const getComments = async () => {
  const result = await Comment.findAll({
    include: [{ model: User, attributes: ["user"] }],
  });

  return result;
};

module.exports = getComments;
