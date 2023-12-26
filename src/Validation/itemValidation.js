const { z } = require('zod');

/**
 * Validation schema for creating a new item.
 * @type {Object}
 */
const createItemZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Item Name is required',
    }),
  }),
});

/**
 * Validation schema for updating an item.
 * @type {Object}
 */
const updateItemZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

/**
 * Object containing validation schemas for item-related operations.
 * @type {Object}
 */
const ItemValidation = {
  createItemZodSchema,
  updateItemZodSchema,
};

module.exports = ItemValidation;
