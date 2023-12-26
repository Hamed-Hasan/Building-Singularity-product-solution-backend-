const { z } = require('zod');
const { NextFunction, Request, Response } = require('express');

/**
 * Middleware for validating incoming requests against a specified schema.
 * @param {Object} schema - Zod schema for validation.
 * @returns {Function} - Express middleware function.
 */
const validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
      cookies: req.cookies,
    });
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateRequest;
