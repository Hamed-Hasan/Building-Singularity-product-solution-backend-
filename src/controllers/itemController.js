// Controller functions
const itemService = require("../services/itemService");

/**
 * Get all items.
 * @route GET /items
 * @returns {Object} - Object with status, data (array of items), and message.
 */
const getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).json({
      message: 'Items retrieved successfully',
      status: 'success',
      data: items,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

/**
 * Create a new item.
 * @route POST /items
 * @param {Object} req.body - Item details.
 * @returns {Object} - Object with status, data (created item), and message.
 */
const createItem = async (req, res) => {
  try {
    const newItem = await itemService.createItem(req.body);
    res.status(201).json({
      message: 'Item created successfully',
      status: 'success',
      data: newItem,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

/**
 * Get a specific item by ID.
 * @route GET /items/:itemId
 * @param {string} req.params.itemId - Item ID.
 * @returns {Object} - Object with status, data (item details), and message.
 */
const getItemById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.itemId);
    res.status(200).json({
      message: 'Item retrieved successfully',
      status: 'success',
      data: item,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

/**
 * Update an item by ID.
 * @route PUT /items/:itemId
 * @param {string} req.params.itemId - Item ID.
 * @param {Object} req.body - Updated item details.
 * @returns {Object} - Object with status, data (updated item), and message.
 */
const updateItem = async (req, res) => {
  try {
    const updatedItem = await itemService.updateItem(req.params.itemId, req.body);
    res.status(200).json({
      message: 'Item updated successfully',
      status: 'success',
      data: updatedItem,
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

/**
 * Delete an item by ID.
 * @route DELETE /items/:itemId
 * @param {string} req.params.itemId - Item ID.
 * @returns {Object} - Object with status and message.
 */
const deleteItem = async (req, res) => {
  try {
    await itemService.deleteItem(req.params.itemId);
    res.status(200).json({
      message: 'Item deleted successfully',
      status: 'success',
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
