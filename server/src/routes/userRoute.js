const express = require("express");
const router = express.Router();

const { findAllUserController } = require("../controllers/userController");

router.get("/", findAllUserController);

module.exports = router;
