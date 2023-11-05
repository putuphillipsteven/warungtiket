const db = require("../models");
const { Op } = require("sequelize");
const transactionDetails = db.transactionDetails;

const createTransactionDetailsQuery = async (
  quantity,
  price,
  totalPrice,
  transactionId
) => {
  try {
    const res = await transactionDetails.create({
      quantity,
      price,
      totalPrice,
      transactionId,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionDetailsQuery,
};
