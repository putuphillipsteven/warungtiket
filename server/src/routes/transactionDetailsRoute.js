const express = require("express");
const router = express.Router();

const {
  createTransactionDetailsController,
} = require("../controllers/transactionDetailsController");

router.post("/create", createTransactionDetailsController);

module.exports = router;
