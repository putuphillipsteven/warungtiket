const express = require("express");
const router = express.Router();

const {
  findAllUserController,
  findUserController,
  updateUserController,
} = require("../controllers/userController");

router.get("/", findAllUserController);
router.get("/search", findUserController);
router.patch("/:id", updateUserController);

module.exports = router;
