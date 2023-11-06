const db = require("../models");
const { Op } = require("sequelize");
const referral = db.referral;

const createReferralQuery = async (referralCode, isUse, eventId, userId) => {
  try {
    const res = await referral.create({
      referralCode,
      isUse,
      eventId,
      userId,
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const findRefferalQuery = async ({ referralCode = null }) => {
  try {
    const res = await referral.findOne({
      where: {
        referralCode,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createReferralQuery,
};
