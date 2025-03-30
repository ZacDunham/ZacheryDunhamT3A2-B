const express = require("express");
const MenuItem = require("../models/MenuItem");

const router = express.Router();

// Get Menu Items
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Add Menu Item
router.post("/", async (req, res) => {
  const { name, price, image } = req.body;
  try {
    const newItem = new MenuItem({ name, price, image });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
