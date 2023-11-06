const { findAllProvinceService } = require("../services/provinceService");

const findAllProvinceController = async (req, res) => {
  try {
    const result = await findAllProvinceService();
    return res.status(200).json({
      message: "Find All Province Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  findAllProvinceController,
};