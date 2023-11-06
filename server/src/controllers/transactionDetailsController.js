const {
  createTransactionDetailService,
} = require("../services/transactionDetailService");

const createTransactionDetailsController = async (
  req,
  res
) => {
  try {
    const { quantity, price, totalPrice, transactionId } =
      req.body;
    console.log(transactionId);
    const result = await createTransactionDetailService(
      quantity,
      price,
      totalPrice,
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
