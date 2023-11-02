const { findAllUserService } = require("../services/userService");

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

module.exports = {
  findAllUserController,
};
