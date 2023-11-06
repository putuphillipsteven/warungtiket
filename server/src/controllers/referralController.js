const {
  createReferralService,
  findReferralService,
} = require("../services/referralService");

const createReferralController = async (req, res) => {
  try {
    const { referralCode, isUse, eventId, userId } = req.body;
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

const findReferralController = async (req, res) => {
  try {
    const { referralCode } = req.query;
    const result = await findReferralService(referralCode);
    return res.status(200).json({
      message: "Find Referral Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createReferralController,
  findReferralController,
};
