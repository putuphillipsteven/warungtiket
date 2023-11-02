const { createEventQuery, findEventQuery } = require("../queries/eventQuery");

const findEventService = async (eventName) => {
  try {
    const res = await findEventQuery(eventName);
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
  findEventService,
};
