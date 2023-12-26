// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const validateRequest = require("../../middlewares/validateRequest");
const UserValidation = require("../../Validation/userValidation");
const authController = require("../controllers/authController");
const { signupZodSchema, loginZodSchema } = require("../validation/userValidation");

// Routes

// POST signup
router.post(
  "/signup",
  validateRequest(signupZodSchema),
  authController.signup
);

// POST login
router.post(
  "/login",
  validateRequest(loginZodSchema),
  authController.login
);

module.exports = router;
