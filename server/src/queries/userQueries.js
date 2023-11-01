const db = require("../models");
const { Op } = require("sequelize");
const user = db.user;

const findAllUserQuery = async () => {
  try {
    const res = await user.findAll();
    return res;
  } catch (err) {
    throw err;
  }
};

const findUserQuery = async ({ email = null, username = null }) => {
  try {
    const res = await user.findOne({
      where: {
        [Op.or]: {
          email,
          username,
        },
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllUserQuery,
  findUserQuery,
};
