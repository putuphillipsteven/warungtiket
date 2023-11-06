const express = require("express");
const router = express.Router();

const {
  findAllProvinceController,
} = require("../controllers/provinceController");

router.get("/", findAllProvinceController);

module.exports = router;
