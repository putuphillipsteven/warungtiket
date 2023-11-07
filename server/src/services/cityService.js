const {
  createCityQuery,
  findCityQuery,
} = require("../queries/cityQuery");

const findCityService = async (citiesName) => {
  try {
    const res = await findCityQuery(citiesName);
    return res;
  } catch (err) {
    throw err;
  }
};

const createCityService = async (citiesName) => {
  try {
    const res = await createCityQuery(citiesName);

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createCityService,
  findCityService,
};
