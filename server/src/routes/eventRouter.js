const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const {
  createEventController,
  findEventsController,
} = require("../controllers/eventController");

router.get("/", findEventsController);
router.post("/", createEventController);
const { createEventController } = require("../controllers/eventController");

router.post("/create", createEventController);

module.exports = router;
