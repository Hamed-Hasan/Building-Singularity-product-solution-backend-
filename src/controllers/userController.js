const userService = require('../services/userService');

// Controller functions

/**
 * Get all users.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      message: 'Users retrieved successfully',
      status: 'success',
      data: users,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

/**
 * Create a new user.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json({
      message: 'User created successfully',
      status: 'success',
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

/**
 * Get a specific user by ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.userId);
    res.status(200).json({
      message: 'User retrieved successfully',
      status: 'success',
      data: user,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

/**
 * Update a user by ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.userId, req.body);
    res.status(200).json({
      message: 'User updated successfully',
      status: 'success',
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

/**
 * Delete a user by ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.userId);
    res.status(200).json({
      message: 'User deleted successfully',
      status: 'success',
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
