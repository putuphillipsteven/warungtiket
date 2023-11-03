const { createTransactionQuery } = require("../queries/transactionQuery");

const createTransactionService = async (
  totalPrice,
  status,
  totalQuantity,
  referalId,
  userId,
  eventId
) => {
  try {
    const res = await createTransactionQuery(
      totalPrice,
      status,
      totalQuantity,
      referalId,
      userId,
      eventId
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionService,
};
