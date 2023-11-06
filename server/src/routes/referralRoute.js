const express = require("express");
const router = express.Router();

const {
  createReferralController,
} = require("../controllers/referralController");

router.post("/create", createReferralController);

module.exports = router;
