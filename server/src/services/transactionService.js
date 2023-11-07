const refferalCodeGenerator = require("referral-code-generator");
const {
  createTransactionQuery,
  findTransactionQUery,
} = require("../queries/transactionQuery");

const {
  findReferralQuery,
  updateReferralQuery,
} = require("../queries/referralQuery");

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
  eventId
) => {
  try {
    // if (referralCode) {
    //   const check = await findReferralQuery(referralCode);
    //   if (!check) throw new Error("Not Found");
    //   await updateReferralQuery(check.id);
    // }
    const newReferral =
      await refferalCodeGenerator.alphaNumeric(
        "uppercase",
        8,
        7
      );
    console.log(newReferral);
    const res = await createTransactionQuery(
      status,
      referralCode,
      userId,
      eventId
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
