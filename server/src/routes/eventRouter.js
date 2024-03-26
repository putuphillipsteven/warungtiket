const express = require('express');
const router = express.Router();

const { body } = require('express-validator');
const { uploadEventFile } = require('../middleware/multer');

const {
	createEventController,
	findEventsController,
	findEventByIdController,
} = require('../controllers/eventController');

router.get('/', findEventsController);
router.get('/:id', findEventByIdController);
router.post('/create', uploadEventFile, createEventController);

module.exports = router;
