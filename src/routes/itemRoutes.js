const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const validateRequest = require('../middlewares/validateRequest');
const ItemValidation = require('../Validation/itemValidation');

// Routes

/**
 * Get all items.
 * @route GET /items
 * @returns {Object} - Object with status, data (all items), and message.
 */
router.get('/',  itemController.getAllItems);

/**
 * Get a specific item by ID.
 * @route GET /items/:itemId
 * @param {string} req.params.itemId - Item ID.
 * @returns {Object} - Object with status, data (item details), and message.
 */
router.get('/:itemId', itemController.getItemById);

/**
 * Create a new item.
 * @route POST /items/create-item
 * @param {Object} req.body - Item data.
 * @returns {Object} - Object with status, data (created item details), and message.
 */
router.post('/create-item', validateRequest(ItemValidation.createItemZodSchema), itemController.createItem);

/**
 * Update an item by ID.
 * @route PUT /items/:itemId
 * @param {string} req.params.itemId - Item ID.
 * @param {Object} req.body - Updated item data.
 * @returns {Object} - Object with status, data (updated item details), and message.
 */
router.put('/:itemId', validateRequest(ItemValidation.updateItemZodSchema), itemController.updateItem);

/**
 * Delete an item by ID.
 * @route DELETE /items/:itemId
 * @param {string} req.params.itemId - Item ID.
 * @returns {Object} - Object with status, message.
 */
router.delete('/:itemId', itemController.deleteItem);

module.exports = router;
