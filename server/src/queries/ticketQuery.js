const db = require("../models");
const { Op } = require("sequelize");
const ticket = db.ticket;

const createTicketQuery = async (
  ticketName,
  ticketQuantity,
  ticketPrice,
  ticketDescription,
  eventID
) => {
  try {
    const res = await ticket.create({
      ticketName,
      ticketQuantity,
      ticketPrice,
      ticketDescription,
      eventID,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTicketQuery,
};
