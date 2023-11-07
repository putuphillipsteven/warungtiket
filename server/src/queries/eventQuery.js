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
      include: [db.ticket, db.province],
      ...filter,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const createEventQuery = async (
  image,
  eventName,
  date,
  province,
  city,
  address,
  category,
  eventDescription,
  userId
) => {
  try {
    const res = await event.create({
      image,
      eventName,
      date,
      province,
      city,
      address,
      category,
      eventDescription,
      userId,
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
