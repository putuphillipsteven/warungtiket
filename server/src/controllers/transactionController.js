const {
	createTransactionService,
	findTransactionService,
} = require('../services/transactionService');
const findTransactionController = async (req, res) => {
	try {
		const result = await findTransactionService();
		return res.status(200).json({
			message: 'success',
			data: result,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}
};
const createTransactionController = async (req, res) => {
	try {
		const {
			status,
			referralCode,
			userId,
			eventId,
			referralUsed,
			totalQuantity,
			totalPrice,
			isUse,
		} = req.body;
		const result = await createTransactionService(
			status,
			referralCode,
			userId,
			eventId,
			referralUsed,
			totalQuantity,
			totalPrice,
			isUse,
			req.file?.filename,
		);
		return res.status(200).json({
			message: 'success',
			data: result,
		});
	} catch (err) {
		return res.status(500).json({
			message: err.message,
		});
	}
};

module.exports = {
	createTransactionController,
	findTransactionController,
};
