const path = require('path');
const multer = require('multer');

const eventStorage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, path.join(__dirname, '../public/img/event'));
	},
	filename: (req, file, cb) => {
		cb(null, `event_${Date.now()}-${file.originalname}`);
	},
});

const avatarStorage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, path.join(__dirname, '../public/images/avatar'));
	},
	filename: (req, file, cb) => {
		const { username } = req.body;
		cb(null, `avatar_${username}-${Date.now()}-${file.originalname}`);
	},
});

const fileFilter = (req, file, cb) => {
	const fileType = file.mimetype.split('/')[1];
	if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg' || fileType === 'gif') {
		cb(null, true);
	} else {
		cb('File type not allowed', false);
	}
};

const paymentStorage = multer.diskStorage({
	destination: (req, res, cb) => {
		cb(null, path.join(__dirname, '../public/img/payment'));
	},
	filename: (req, file, cb) => {
		cb(null, `avatar_${username}-${Date.now()}-${file.originalname}`);
	},
});

const limits = {
	fileSize: 10024 * 10024,
};

const uploadEventFile = multer({
	storage: eventStorage,
	fileFilter,
	limits,
}).single('img');

const uploadPaymentFile = multer({
	storage: paymentStorage,
	fileFilter,
	limits,
}).single('avatar');
const uploadAvatarFile = multer({
	storage: avatarStorage,
	fileFilter,
	limits,
}).single('avatar');

module.exports = {
	uploadPaymentFile,
	uploadEventFile,
	uploadAvatarFile,
};
