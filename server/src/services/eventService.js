const { createEventQuery, findEventsQuery, findEventByIdQuery } = require('../queries/eventQuery');

const findEventsService = async (province, provinceId) => {
	try {
		const res = await findEventsQuery(province, provinceId);
		return res;
	} catch (err) {
		throw err;
	}
};

const findEventByIdService = async (id) => {
	try {
		const res = await findEventByIdQuery(id);
		return res;
	} catch (err) {
		throw err;
	}
};

const createEventService = async (
	image,
	eventName,
	date,
	province,
	city,
	address,
	category,
	eventDescription,
	userId,
) => {
	try {
		const res = await createEventQuery(
			image,
			eventName,
			date,
			province,
			city,
			address,
			category,
			eventDescription,
			userId,
		);

		return res;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	createEventService,
	findEventsService,
	findEventByIdService,
};
