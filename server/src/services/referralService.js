const {
  createReferralQuery, findReferralQuery,
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

const findReferralService = async () => {
  try {
    const res = await findReferralQuery();
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createReferralService,
  findReferralService,
};
