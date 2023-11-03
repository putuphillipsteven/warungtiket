const express = require("express");
const router = express.Router();

const {
  createTransactionController,
} = require("../controllers/transactionController");

router.post("/", createTransactionController);

module.exports = router;
