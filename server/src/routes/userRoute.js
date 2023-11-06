const express = require("express");
const router = express.Router();

const {
  findAllUserController,
  findUserController,
} = require("../controllers/userController");

router.get("/", findAllUserController);
router.get("/search", findUserController);

module.exports = router;
