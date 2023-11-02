const db = require("../models");
const { Op } = require("sequelize");
const event = db.event;

const findEventsQuery = async (province = null) => {
  try {
    const filter = {};
    if (province)
      filter.where = {
        province: {
          [Op.like]: `%${province}%`,
        },
      };
    const res = await event.findAll({
      ...filter,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const createEventQuery = async (
  eventName,
  date,
  province,
  city,
  address,
  price,
  eventDescription
) => {
  try {
    const res = await event.create({
      eventName,
      date,
      province,
      city,
      address,
      price,
      eventDescription,
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createEventQuery,
  findEventsQuery,
};
