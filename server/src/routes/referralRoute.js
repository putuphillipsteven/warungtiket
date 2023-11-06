const express = require("express");
const router = express.Router();

const {
  createReferralController,
  findReferralController,
} = require("../controllers/referralController");

router.post("/create", createReferralController);
router.get("/", findReferralController);

module.exports = router;