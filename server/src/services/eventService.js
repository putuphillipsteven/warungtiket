const { createEventQuery } = require("../queries/eventQuery");

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
};
