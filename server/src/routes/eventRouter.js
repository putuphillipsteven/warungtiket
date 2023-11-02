const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const {
  createEventController,
  findEventController,
} = require("../controllers/eventController");

router.get("/", findEventController);
router.post("/", createEventController);

module.exports = router;
