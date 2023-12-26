const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateRequest = require('../middlewares/validateRequest');
const UserValidation = require('../Validation/userValidation');

// Routes

/**
 * Get all users.
 * @route GET /users
 * @returns {Object} - Object with status, data (users), and message.
 */
router.get('/', userController.getAllUsers);

/**
 * Get a specific user by ID.
 * @route GET /users/:userId
 * @param {string} req.params.userId - User ID.
 * @returns {Object} - Object with status, data (user details), and message.
 */
router.get('/:userId', userController.getUserById);

/**
 * Create a new user.
 * @route POST /users/create-user
 * @param {Object} req.body - User data.
 * @returns {Object} - Object with status, data (new user details), and message.
 */
router.post('/create-user', validateRequest(UserValidation.createUserZodSchema), userController.createUser);

/**
 * Update a user by ID.
 * @route PUT /users/:userId
 * @param {string} req.params.userId - User ID.
 * @param {Object} req.body - Updated user data.
 * @returns {Object} - Object with status, data (updated user details), and message.
 */
router.put('/:userId', validateRequest(UserValidation.updateUserZodSchema), userController.updateUser);

/**
 * Delete a user by ID.
 * @route DELETE /users/:userId
 * @param {string} req.params.userId - User ID.
 * @returns {Object} - Object with status, message, and no data.
 */
router.delete('/:userId', userController.deleteUser);

module.exports = router;
