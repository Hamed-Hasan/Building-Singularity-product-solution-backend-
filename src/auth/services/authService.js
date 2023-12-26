// services/userService.js

const User = require("../../models/User");


/**
 * Creates a new user in the database.
 * @param {Object} userData - User details {name: string, email: string, password: string, created_by: string}.
 * @returns {Promise<Object>} - Created user object.
 */
const createUser = async (userData) => {
  const { email } = userData;

  // Check if the user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Create a new user if no existing user found
  const newUser = await User.create(userData);
  return newUser;
};


/**
 * Retrieves a user by their email.
 * @param {string} email - User's email.
 * @returns {Promise<Object>} - User object.
 */
const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
};
