const express = require("express");
const router = express.Router();

const {
  findAllCategoryController,
} = require("../controllers/categoryController");

router.get("/", findAllCategoryController);

module.exports = router;
