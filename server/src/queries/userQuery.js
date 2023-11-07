const db = require("../models");
const { Op, Sequelize } = require("sequelize");
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
  id = null,
  email = null,
  username = null,
}) => {
  try {
    const res = await user.findOne({
      where: {
        [Op.or]: {
          id,
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

const findUserIdQuery = async (id = null) => {
  try {
    const params = {};
    if (id) params.id = id;
    const res = await user.findOne({
      where: {
        ...params,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const updateUserQuery = async (id) => {
  try {
    const res = user.increment("point", {
      by: 10000,
      where: {
        id,
      },
    });
    // const res = user.update(
    //   {
    //     point: Sequelize.literal(`point + ${point}`),
    //   },
    //   {
    //     where: {
    //       id: id,
    //     },
    //   }
    // );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllUserQuery,
  findUserQuery,
  findUserIdQuery,
  updateUserQuery,
};
