const {
  createEventService,
  findEventsService,
} = require("../services/eventService");

const findEventsController = async (req, res) => {
  try {
    const { province } = req.query;
    const result = await findEventsService(province);
    return res.status(200).json({
      message: "Success Find",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const createEventController = async (req, res) => {
  try {
    const { eventName, date, province, city, address, eventDescription } =
      req.body;
    // const { id } = req.user;
    const result = await createEventService(
      req.file?.filename,
      eventName,
      date,
      province,
      city,
      address,
      eventDescription
    );

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

module.exports = {
  createEventController,
  findEventsController,
};
