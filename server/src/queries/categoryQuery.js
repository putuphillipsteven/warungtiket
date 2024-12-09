const db = require('../models');
const province = db.category;

const findAllCategoryQuery = async () => {
	try {
		const res = await province.findAll({});
		return res;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	findAllCategoryQuery,
};
