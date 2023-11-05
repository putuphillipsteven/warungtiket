const {
  createTransactionService,
  findTransactionService,
} = require("../services/transactionService");

const findTransactionController = async (req, res) => {
  try {
    const result = await findTransactionService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
const createTransactionController = async (req, res) => {
  try {
    const { status, referralCode, userId, eventId } =
      req.body;
    const result = await createTransactionService(
      status,
      referralCode,
      userId,
      eventId
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionController,
  findTransactionController,
};
