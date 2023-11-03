const { createTransactionService } = require("../services/transactionService");

const createTransactionController = async (req, res) => {
  try {
    const { totalPrice, status, totalQuantity, referalId, userId, eventId } =
      req.body;
    console.log(req.body);
    const result = await createTransactionService(
      totalPrice,
      status,
      totalQuantity,
      referalId,
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
};
