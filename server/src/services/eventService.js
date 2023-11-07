const { createEventQuery, findEventsQuery } = require("../queries/eventQuery");

const findEventsService = async (province) => {
  try {
    const res = await findEventsQuery(province);
    return res;
  } catch (err) {
    throw err;
  }
};

const createEventService = async (
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
    const res = await createEventQuery(
      image,
      eventName,
      date,
      province,
      city,
      address,
      category,
      eventDescription,
      userId
    );

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createEventService,
  findEventsService,
};
