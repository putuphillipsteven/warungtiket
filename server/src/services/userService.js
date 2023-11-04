const { findAllUserQuery } = require("../queries/userQuery");

const findAllUserService = async () => {
  try {
    const res = await findAllUserQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllUserService,
};
