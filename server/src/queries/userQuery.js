const db = require("../models");
const { Op, and } = require("sequelize");
const user = db.user;

const findAllUserQuery = async () => {
  try {
    const res = await user.findAll({
      include: [db.transaction, db.event, db.referral],
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const findUserQuery = async (
  id = null,
  username = null,
  email = null
) => {
  try {
    const res = await user.findOne({
      where: {
        [Op.or]: {
          id,
          username,
          email,
        },
      },
    });
    console.log(res);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllUserQuery,
  findUserQuery,
};
