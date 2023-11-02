const { createTicketQuery } = require("../queries/ticketQuery");

const createTicketService = async (
  ticketName,
  ticketQuantity,
  ticketPrice,
  ticketDescription,
  eventID
) => {
  try {
    const res = await createTicketQuery(
      ticketName,
      ticketQuantity,
      ticketPrice,
      ticketDescription,
      eventID
    );

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTicketService,
};
