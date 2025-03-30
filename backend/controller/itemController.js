const Item = require("../models/itemModel");

// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching items" });
  }
};

// Get a single item by ID
const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Error fetching item" });
  }
};

// Create a new item
const createItem = async (req, res) => {
  const { name, price, description } = req.body;
  const newItem = new Item({ name, price, description });
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: "Error creating item" });
  }
};

module.exports = { getItems, getItemById, createItem };