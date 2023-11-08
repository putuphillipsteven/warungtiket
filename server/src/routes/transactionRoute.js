const express = require("express");
const router = express.Router();

const {
  createTransactionController,
  findTransactionController,
} = require("../controllers/transactionController");

const {
  uploadPaymentFile,
} = require("../middleware/multer");

router.post(
  "/",
  uploadPaymentFile,
  createTransactionController
);
router.get("/", findTransactionController);

module.exports = router;
