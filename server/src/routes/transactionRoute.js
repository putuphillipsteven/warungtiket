const express = require("express");
const router = express.Router();

const {
  createTransactionController,
  findTransactionController,
} = require("../controllers/transactionController");

router.post("/", createTransactionController);
router.get("/", findTransactionController);

module.exports = router;
