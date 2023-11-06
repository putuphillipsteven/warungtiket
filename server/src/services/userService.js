const {
  findAllUserQuery,
  findUserQuery,
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

module.exports = {
  findAllUserService,
  findUserService,
};
