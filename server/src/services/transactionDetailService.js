const {
  createTransactionDetailsQuery,
} = require("../queries/transactionDetailsQuery");

const createTransactionDetailService = async (
  quantity,
  price,
  totalPrice,
  transactionId
) => {
  try {
    const res = await createTransactionDetailsQuery(
      quantity,
      price,
      totalPrice,
      transactionId
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionDetailService,
};
