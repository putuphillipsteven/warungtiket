const {
  createReferralService,
} = require("../services/referralService");

const createReferralController = async (req, res) => {
  try {
    const { referralCode, isUse, eventId, userId } =
      req.body;
    const result = await createReferralService(
      referralCode,
      isUse,
      eventId,
      userId
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    return res.status(500).message;
  }
};

module.exports = {
  createReferralController,
};
