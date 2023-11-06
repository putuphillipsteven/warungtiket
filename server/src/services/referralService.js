const {
  createReferralQuery,
  findReferralQuery,
} = require("../queries/referralQuery");

const createReferralService = async (referralCode, isUse, eventId, userId) => {
  try {
    const res = await createReferralQuery(referralCode, isUse, eventId, userId);
    return res;
  } catch (err) {
    throw err;
  }
};

const findReferralService = async (referralCode) => {
  try {
    const res = await findReferralQuery(referralCode);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createReferralService,
  findReferralService,
};
