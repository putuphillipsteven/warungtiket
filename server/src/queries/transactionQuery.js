const db = require("../models");
const { Op } = require("sequelize");
const transaction = db.transaction;

const createTransactionQuery = async (
  totalPrice,
  status,
  totalQuantity,
  referalId,
  userId,
  eventId
) => {
  try {
    const res = transaction.create({
      totalPrice,
      status,
      totalQuantity,
      referalId,
      userId,
      eventId,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionQuery,
};
