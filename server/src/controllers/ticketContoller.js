const { createTicketService } = require("../services/ticketService");

const createTicketController = async (req, res) => {
  try {
    const {
      ticketName,
      ticketQuantity,
      ticketPrice,
      ticketDescription,
      eventID,
    } = req.body;
    console.log(req.body);
    // const { id } = req.user;
    const result = await createTicketService(
      ticketName,
      ticketQuantity,
      ticketPrice,
      ticketDescription,
      eventID
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
  createTicketController,
};
