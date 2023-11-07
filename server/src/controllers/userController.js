const {
  findAllUserService,
  findUserService,
  findUserIdService,
  updateUserService,
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
    const result = await findUserService(id, username, email);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const findUserIdController = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await findUserIdService(id);
    return res.status(200).json({
      message: "Find User Id Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const { point } = req.body;
    const result = updateUserService(id, point);
    return res.status(200).json({
      message: "PLUS POINT SUCCESS",
      data: result,
    });
  } catch (err) {
    return res.status(500).send.message;
  }
};

module.exports = {
  findAllUserController,
  findUserController,
  findUserIdController,
  updateUserController,
};
