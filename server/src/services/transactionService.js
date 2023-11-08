const refferalCodeGenerator = require("referral-code-generator");
const {
  createTransactionQuery,
  findTransactionQUery,
} = require("../queries/transactionQuery");

const {
  findReferralQuery,
  updateReferralQuery,
  createReferralQuery,
} = require("../queries/referralQuery");
const { updateUserQuery } = require("../queries/userQuery");

const findTransactionService = async () => {
  try {
    const res = await findTransactionQUery();
    return res;
  } catch (err) {
    throw err;
  }
};

const createTransactionService = async (
  status,
  referralCode,
  userId,
  eventId,
  referralUsed,
  totalQuantity,
  totalPrice,
  isUse,
  avatar
) => {
  try {
    if (referralUsed) {
      const check = await findReferralQuery(referralUsed);
      console.log(check);
      if (!check) throw new Error("Referral Not Found");
      await updateReferralQuery(check.id);
      await updateUserQuery(check.userId);
      await updateUserQuery(userId);
    }
    const newReferral = await refferalCodeGenerator.alpha(
      "uppercase",
      5
    );
    const res = await createTransactionQuery(
      status,
      newReferral,
      userId,
      eventId,
      referralUsed,
      totalQuantity,
      totalPrice,
      avatar
    );
    await createReferralQuery(
      newReferral,
      false,
      eventId,
      userId
    );
    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createTransactionService,
  findTransactionService,
};
