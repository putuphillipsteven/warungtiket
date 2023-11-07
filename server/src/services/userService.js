const {
  findAllUserQuery,
  findUserQuery,
  findUserIdQuery,
  updateUserQuery,
} = require("../queries/userQuery");

const findAllUserService = async () => {
  try {
    const res = await findAllUserQuery();
    return res;
  } catch (err) {
    throw err;
  }
};
const findUserService = async (id, username, email) => {
  try {
    const res = await findUserQuery(id, username, email);
    return res;
  } catch (err) {
    throw err;
  }
};

const updateUserService = async (id, point) => {
  try {
    const check = findUserIdQuery(id);

    if (!check) throw new Error("username doenst exist");

    const res = await updateUserQuery(id, point);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllUserService,
  findUserService,
  updateUserService,
};
