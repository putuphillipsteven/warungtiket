const express = require("express");
const router = express.Router();

const {
  registerController,
  loginController,
  keepLoginController,
  updateController,
} = require("../controllers/authController");

const { uploadAvatarFile } = require("../middleware/multer");

const { verifyToken } = require("../middleware/auth");

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/keep-login", verifyToken, keepLoginController);
router.patch("/update-profile/:id", uploadAvatarFile, updateController);

module.exports = router;
