const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const { createTicketController } = require("../controllers/ticketContoller");

router.post("/create", createTicketController);

module.exports = router;
