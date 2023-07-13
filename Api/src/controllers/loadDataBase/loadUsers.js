const users = require("../../../assets/database/users.json");
const { User } = require("../../db.js");

const createUsers = async () => {
  try {
    return await User.bulkCreate(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUsers };
