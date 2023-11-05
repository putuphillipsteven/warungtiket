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
      include: [db.ticket],
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
  eventDescription
) => {
  try {
    const res = await event.create({
      image,
      eventName,
      date,
      province,
      city,
      address,
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


// "data": {
//     image: 5,
//     eventName: "test",
//     date: "11-4-2023",
//     province: "Yogyakarta",
//     city: "Yogyakarta",
//     address: "test",
//     eventDescription: "test",
// }