const {
  createTransactionQuery,
  findTransactionQUery,
} = require("../queries/transactionQuery");

const findTransactionService = async () => {
  try {
    const res = await findTransactionQUery();
    return res;
  } catch (err) {
    throw err;
  }
};

const createTransactionService = async (
  status,
  referralCode,
  userId,
  eventId
) => {
  try {
    const res = await createTransactionQuery(
      status,
      referralCode,
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
  findTransactionService,
};
