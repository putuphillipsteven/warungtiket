const {
  findAllUserService,
  findUserService,
} = require("../services/userService");

const findAllUserController = async (req, res) => {
  try {
    const result = await findAllUserService();
    return res.status(200).json({
      message: "Find All User Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
const findUserController = async (req, res) => {
  try {
    const { id, username, email } = req.query;
    const result = await findUserService(
      id,
      username,
      email
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  findAllUserController,
  findUserController,
};
