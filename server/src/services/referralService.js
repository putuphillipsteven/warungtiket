const {
  createReferralQuery,
  findReferralQuery,
  updateReferralQuery,
} = require("../queries/referralQuery");

const createReferralService = async (
  referralCode,
  isUse,
  eventId,
  userId
) => {
  try {
    const res = await createReferralQuery(
      referralCode,
      isUse,
      eventId,
      userId
    );
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

const updateReferralService = async (
  id,
  referralCode,
  isUse
) => {
  try {
    const check = await findReferralQuery(referralCode);
    if (!check) throw new Error("Not Found");
    const res = await updateReferralQuery(check.id);
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createReferralService,
  findReferralService,
  updateReferralService,
};
