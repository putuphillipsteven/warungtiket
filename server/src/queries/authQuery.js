const db = require("../models");
const { Op } = require("sequelize");
const user = db.user;

const registerQuery = async (email, username, password) => {
  const t = await db.sequelize.transaction();
  try {
    const res = await user.create(
      {
        email,
        username,
        password,
      },
      { transaction: t }
    );
    await t.commit();
    return res;
  } catch (err) {
    await t.rollback();
    throw err;
  }
};

const loginQuery = async (email) => {
  try {
    const res = await user.findOne({
      where: {
        email,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const keepLoginQuery = async (id) => {
  try {
    const res = await user.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

const updateQuery = async (username, email, id, avatar) => {
  try {
    await db.sequelize.transaction(async (t) => {
      await user.update(
        {
          username,
          email,
          avatar,
        },
        {
          where: {
            id,
          },
        }
      );
    });
    console.log(username);
    console.log(fullname);
    console.log(email);
    console.log(avatar);
    console.log(id);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  registerQuery,
  loginQuery,
  keepLoginQuery,
  updateQuery,
};
