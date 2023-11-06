const express = require("express");
const router = express.Router();

const {
    createCityController,
    findCityController,
} = require("../controllers/cityController");

router.get("/", findCityController);
router.post("/create", createCityController);

module.exports = router;