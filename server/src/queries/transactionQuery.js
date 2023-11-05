const db = require("../models");
const { Op } = require("sequelize");
const transaction = db.transaction;

const findTransactionQUery = async () => {
  try {
    const res = await transaction.findAll({
      include: [db.transactionDetails],
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const createTransactionQuery = async (
  status,
  referralCode,
  userId,
  eventId
) => {
  try {
    const res = await transaction.create({
      status,
      referralCode,
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
  findTransactionQUery,
};
