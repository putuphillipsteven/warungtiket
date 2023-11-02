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
  id,
  eventName,
  date,
  province,
  city,
  address,
  price,
  eventDescription
) => {
  try {
    const res = await createEventQuery(
      id,
      eventName,
      date,
      province,
      city,
      address,
      price,
      eventDescription
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
