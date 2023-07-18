const { Comment, User } = require("../../db");

const getComments = async () => {
  const result = await Comment.findAll({
    // include: [
    //   {
    //     model: User,
    //     through: { attributes: [] },
    //     attributes: ["mail"],
    //   },
    // ],
  });

  return result;
};

module.exports = getComments;
