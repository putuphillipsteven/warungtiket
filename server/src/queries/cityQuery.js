const db = require("../models");
const { Op } = require("sequelize");
const city = db.city;
const findCityQuery = async (citiesName) => {
  try {
    const filter = {};
    if (citiesName)
      filter.where = {
        citiesName: {
          [Op.like]: `%${citiesName}%`,
        },
      };
    const res = await city.findAll({
      //   include: [db.city],
      ...filter,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const createCityQuery = async (citiesName) => {
  try {
    const res = await city.create({
      citiesName,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createCityQuery,
  findCityQuery,
};
