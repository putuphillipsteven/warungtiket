const { findAllProvinceQuery } = require("../queries/provinceQuery");

const findAllProvinceService = async () => {
  try {
    const res = await findAllProvinceQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findAllProvinceService,
};
