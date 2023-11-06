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

const findReferralQuery = async (referralCode = null) => {
  try {
    const filter = {};
    if (referralCode)
      filter.where = {
        referralCode: {
          [Op.like]: `%${referralCode}%`,
        },
      };
    const res = await referral.findAll({
      where: {
        ...filter,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createReferralQuery,
  findReferralQuery,
};
