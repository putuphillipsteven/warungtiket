const {
  createTransactionDetailsQuery,
} = require("../queries/transactionDetailsQuery");

const createTransactionDetailService = async (
  quantity,
  price,
  transactionId
) => {
  try {
    const res = await createTransactionDetailsQuery(
      quantity,
      price,
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
