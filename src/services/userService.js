const User = require('../models/User');

// Service functions

/**
 * Get all users from the database.
 * @returns {Promise<Array>} - Array of user data.
 * @throws {Error} - Throws an error if there's an issue fetching users.
 */
const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Error fetching users from the database');
  }
};

/**
 * Create a new user in the database.
 * @param {Object} userData - User data.
 * @returns {Promise<Object>} - Object with user data.
 * @throws {Error} - Throws an error if there's an issue creating the user.
 */
const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error('Error creating user in the database');
  }
};

/**
 * Get a specific user by ID from the database.
 * @param {string} userId - User ID.
 * @returns {Promise<Object>} - Object with user data.
 * @throws {Error} - Throws an error if the user is not found or there's an issue fetching the user.
 */
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error fetching user by ID');
  }
};

/**
 * Update a user by ID in the database.
 * @param {string} userId - User ID.
 * @param {Object} userData - Updated user data.
 * @returns {Promise<Object>} - Object with updated user data.
 * @throws {Error} - Throws an error if the user is not found or there's an issue updating the user.
 */
const updateUser = async (userId, userData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

/**
 * Delete a user by ID from the database.
 * @param {string} userId - User ID.
 * @returns {Promise<Object>} - Object with deleted user data.
 * @throws {Error} - Throws an error if the user is not found or there's an issue deleting the user.
 */
const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new Error('User not found');
    }
    return deletedUser;
  } catch (error) {
    throw new Error('Error deleting user');
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
