const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { registerQuery, keepLoginQuery } = require("../queries/authQuery");

const { findUserQuery } = require("../queries/userQuery");

const registerService = async (email, username, password) => {
  try {
    const check = await findUserQuery({ email, username });

    if (check) throw new Error("Email or username already exist");

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    const res = await registerQuery(email, username, hashPassword);

    return res;
  } catch (err) {
    throw err;
  }
};

const loginService = async (email, password) => {
  try {
    const check = await findUserQuery({ email });
    if (!check) throw new Error("Email Doesnt Exist");

    const isValid = await bcrypt.compare(password, check.password);
    if (!isValid) throw new Error("Password is Incorrect");

    let payload = {
      id: check.id,
      email: check.email,
      username: check.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1hr",
    });
    return { user: check, token };
  } catch (err) {
    throw err;
  }
};

const keepLoginService = async (id) => {
  try {
    const res = await keepLoginQuery(id);

    if (!res) throw new Error("User Doesnt Exist");

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  registerService,
  loginService,
  keepLoginService,
};
