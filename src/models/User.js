// models/User.js

/**
 * User Model
 * Defines the structure of the User document in the MongoDB collection.
 * @typedef {Object} User
 * @property {string} name - User's name.
 * @property {string} email - User's email.
 * @property {string} password - User's password.
 * @property {Date} created_at - Date when the user was created (default is the current date).
 * @property {string} created_by - User who created the account.
 */

const mongoose = require('mongoose');

/**
 * User Schema
 * Defines the schema for the User model.
 * @type {mongoose.Schema}
 */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: String,
    required: true,
  },
});

/**
 * User Model
 * Represents the User model based on the UserSchema.
 * @type {mongoose.Model<User>}
 */
const User = mongoose.model('User', UserSchema);

module.exports = User;
