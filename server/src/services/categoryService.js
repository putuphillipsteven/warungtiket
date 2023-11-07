const { findAllCategoryQuery } = require("../queries/categoryQuery");

const findAllCategoryService = async () => {
  try {
    const res = await findAllCategoryQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllCategoryService,
};
