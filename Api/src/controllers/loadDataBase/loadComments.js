const comments = require("../../../assets/database/comments.json");
const { Comment, User } = require("../../db.js");

const createComments = async () => {
  try {
    // for (let i = 0; i < 10; i++) {
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];

      const commentData = {
        content: comment.content,
        // email: comment.email,
      };

      const createComment = await Comment.create({ content: comment.content });

      const foundUser = await User.findOne({
        where: { mail: comment.email },
      });

      if (foundUser) {
        await createComment.setUser(foundUser.id);
      }
      // const foundBrand = await Brand.findOne({
      //   where: { name: product.brand[0] },
      // });

      // if (foundBrand) {
      //   await createProduct.setBrand(foundBrand.id);
      // }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = createComments;
