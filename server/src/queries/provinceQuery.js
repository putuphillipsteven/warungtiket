const db = require('../models');
const province = db.province;

const findAllProvinceQuery = async () => {
	try {
		const res = await province.findAll({
			include: [db.event],
		});
		return res;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	findAllProvinceQuery,
};
