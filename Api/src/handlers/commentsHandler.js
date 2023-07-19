const createComment = require("../controllers/comments/createComment");
const getComments = require("../controllers/comments/getComments");

const createCommentHandler = async (req, res) => {
  try {
    console.log(req.body);
    const comment = await createComment(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating commetn", message: error.message });
  }
};

const getCommentsHandler = async (req, res) => {
  try {
    // const { content } = req.body;

    const comment = await getComments(req.body);
    res.status(200).json(comment);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting comments", message: error.message });
  }
};

module.exports = { createCommentHandler, getCommentsHandler };
