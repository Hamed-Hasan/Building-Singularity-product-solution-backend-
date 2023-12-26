const { z } = require('zod');

/**
 * Zod schema for validating user creation.
 */
const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'User Name is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }).email({
      message: 'Invalid email format',
    }),
    password: z.string({
      required_error: 'Password is required',
    }),
  }),
});

/**
 * Zod schema for validating user update.
 */
const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email({
      message: 'Invalid email format',
    }).optional(),
    password: z.string().optional(),
  }),
});

const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};

module.exports = UserValidation;
