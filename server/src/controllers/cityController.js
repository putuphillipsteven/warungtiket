const { findCityService } = require("../services/cityService");

const findCityController = async (req, res) => {
  try {
    const { citiesName } = req.query;
    const result = await findCityService(citiesName);
    return res.status(200).json({
      message: "Success Find",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const createCityController = async (req, res) => {
  try {
    const { citiesName } = req.body;
    const result = await createCityController(citiesName);
    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(res?.message);
  }
};

module.exports = {
  createCityController,
  findCityController,
};
