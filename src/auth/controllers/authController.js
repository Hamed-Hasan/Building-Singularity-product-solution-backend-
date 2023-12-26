// controllers/authController.js
const userService = require("../services/authService");
const bcrypt = require("bcrypt");

/**
 * Handles user signup.
 * @route POST /signup
 * @param {Object} req.body - User details {name: string, email: string, password: string}.
 * @returns {Object} - Object with status, data (created user), and message.
 */

const signup = async (req, res) => {
    try {
      // Hash the password before storing it
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      const newUser = await userService.createUser({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        created_by: "super admin",
      });
  
      res.status(201).json({
        message: "User created successfully",
        status: "success",
        data: newUser,
      });
    } catch (error) {
      // Check if the error is due to an existing user
      if (error.message === 'User with this email already exists') {
        return res.status(400).json({
          status: 'error',
          error: 'User with this email already exists',
        });
      }
  
      res.status(500).json({ status: 'error', error: 'Internal Server Error' });
    }
  };
  

/**
 * Handles user login.
 * @route POST /login
 * @param {Object} req.body - User credentials {email: string, password: string}.
 * @returns {Object} - Object with status, data (user details), and message.
 */
const login = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);

    // Check if the user exists and compare the password
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      res.status(200).json({
          message: "Login successful",
        status: "success",
        data: { user: { name: user.name, email: user.email } },
      });
    } else {
      res.status(401).json({ status: "error", error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ status: "error", error: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
};
