const path = require("path");
const multer = require("multer");

const eventStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/img/event"));
  },
  filename: (req, file, cb) => {
    cb(null, `event_${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const fileType = file.mimetype.split("/")[1];
  if (
    fileType === "png" ||
    fileType === "jpg" ||
    fileType === "jpeg" ||
    fileType === "gif"
  ) {
    cb(null, true);
  } else {
    cb("File type not allowed", false);
  }
};

const paymentStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../public/img/payment"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `avatar_${username}-${Date.now()}-${
        file.originalname
      }`
    );
  },
});

const limits = {
  fileSize: 1024 * 1024,
};

const uploadEventFile = multer({
  storage: eventStorage,
  fileFilter,
  limits,
}).single("img");

const uploadPaymentFile = multer({
  storage: paymentStorage,
  fileFilter,
  limits,
}).single("avatar");
module.exports = {
  uploadPaymentFile,
  uploadEventFile,
};
