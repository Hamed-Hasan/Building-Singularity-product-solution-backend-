// validation/userValidation.js
const { z } = require("zod");

// Zod schema for user signup
const signupZodSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    email: z.string({ required_error: "Email is required" }).email({
      message: "Invalid email format",
    }),
    password: z.string({ required_error: "Password is required" }).min(6, {
      message: "Password must be at least 6 characters long",
    }),
  }),
});

// Zod schema for user login
const loginZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is required" }).email({
      message: "Invalid email format",
    }),
    password: z.string({ required_error: "Password is required" }),
  }),
});

module.exports = {
  signupZodSchema,
  loginZodSchema,
};
