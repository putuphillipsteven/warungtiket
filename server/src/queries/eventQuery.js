const db = require('../models');
const { Op } = require('sequelize');
const event = db.event;
const findEventsQuery = async (provinceId = null) => {
	try {
		const filter = {};
		if (provinceId) filter.provinceId = provinceId;
		const res = await event.findAll({
			include: [db.ticket, db.user, db.province],
			where: {
				...filter,
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};

const findEventByIdQuery = async (id = 0) => {
	try {
		const res = await event.findOne({
			where: {
				id: id,
			},
			include: [db.ticket, db.user, db.province],
		});
		return res;
	} catch (err) {
		throw err;
	}
};

const createEventQuery = async (
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
		const res = await event.create({
			image,
			eventName,
			date,
			province,
			city,
			address,
			category,
			eventDescription,
			userId,
		});

		return res;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	createEventQuery,
	findEventsQuery,
	findEventByIdQuery,
};
