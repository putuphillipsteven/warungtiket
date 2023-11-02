const express = require("express");
const router = express.Router();

const { body } = require("express-validator");


const {
  createEventController,
} = require("../controllers/eventController");

router.post(
  "/",
  createEventController
);

module.exports = router;
