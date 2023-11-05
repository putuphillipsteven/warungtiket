const {
  createTransactionDetailService,
} = require("../services/transactionDetailService");

const createTransactionDetailsController = async (
  req,
  res
) => {
  try {
    const { quantity, price, transactionId } = req.body;
    const result = await createTransactionDetailService(
      quantity,
      price,
      transactionId
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = { createTransactionDetailsController };
