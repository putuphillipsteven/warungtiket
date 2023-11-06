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

const findUserQuery = async ({
  email = null,
  username = null,
}) => {
  try {
    const res = await user.findOne({
      where: {
        [Op.or]: {
          email,
          username,
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
