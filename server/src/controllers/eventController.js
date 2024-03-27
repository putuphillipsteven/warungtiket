const {
	createEventService,
	findEventsService,
	findEventByIdService,
} = require('../services/eventService');

const findEventsController = async (req, res) => {
	try {
		const { provinceId } = req.query;
		const result = await findEventsService(provinceId);
		return res.status(200).json({
			message: 'Success Find',
			data: result,
		});
	} catch (err) {
		throw err;
	}
};

const findEventByIdController = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await findEventByIdService(id);
		return res.status(200).json({
			message: 'Find event by id success',
			data: result,
		});
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

const createEventController = async (req, res) => {
	try {
		const { eventName, date, province, city, address, category, eventDescription, userId } =
			req.body;
		// const { id } = req.user;
		const result = await createEventService(
			req.file?.filename,
			eventName,
			date,
			province,
			city,
			address,
			category,
			eventDescription,
			userId,
		);

		return res.status(200).json({
			message: 'Success',
			data: result,
		});
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

module.exports = {
	createEventController,
	findEventsController,
	findEventByIdController,
};
