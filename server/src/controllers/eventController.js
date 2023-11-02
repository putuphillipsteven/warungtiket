const {
  createEventService,
  findEventService,
} = require("../services/eventService");

const findEventController = async (req, res) => {
  try {
    const { eventName } = req.query;
    const result = await findEventService({ eventName });
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const createEventController = async (req, res) => {
  try {
    const {
      eventName,
      date,
      province,
      city,
      address,
      price,
      eventDescription,
    } = req.body;
    console.log(req.body);
    // const { id } = req.user;
    const result = await createEventService(
      eventName,
      date,
      province,
      city,
      address,
      price,
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
  findEventController,
};
