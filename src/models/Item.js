const mongoose = require('mongoose');

/**
 * Item Schema for MongoDB.
 */
const ItemSchema = new mongoose.Schema({
    name: {
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
 * MongoDB model for items.
 */
const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
