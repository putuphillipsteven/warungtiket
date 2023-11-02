const db = require("../models");
const { Op } = require("sequelize");
const event = db.event;

const findEventQuery = async (eventName = null) => {
  try {
    const filter = {};
    if (eventName)
      filter.where = {
        eventName: {
          [Op.like]: `%${eventName}%`,
        },
      };
    const res = await event.findAll();
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
  findEventQuery,
};
