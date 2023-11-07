const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");

const {
  createTransactionController,
  findTransactionController,
} = require("../controllers/transactionController");

router.post("/", verifyToken, createTransactionController);
router.get("/", findTransactionController);

module.exports = router;
