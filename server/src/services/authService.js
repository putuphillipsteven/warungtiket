const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { registerQuery } = require("../queries/authQueries");
const { findUserQuery } = require("../queries/userQueries");

const registerService = async (email, username, password) => {
  try {
    const check = await findUserQuery(email, username);

    if (check) throw new Error("Email or username already exist");

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    const res = await registerQuery(email, username, hashPassword);

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  registerService,
};
