const { findAllCategoryService } = require("../services/categoryService");

const findAllCategoryController = async (req, res) => {
  try {
    const result = await findAllCategoryService();
    return res.status(200).json({
      message: "Find All Category Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  findAllCategoryController,
};