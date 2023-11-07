const express = require("express");
const router = express.Router();

const {
  createReferralController,
  findReferralController,
  updateReferralController,
} = require("../controllers/referralController");

router.post("/create", createReferralController);
router.get("/", findReferralController);
router.patch("/", updateReferralController);

module.exports = router;
