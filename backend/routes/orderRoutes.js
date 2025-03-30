const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Place Order
router.post("/", async (req, res) => {
  const { user, items, total } = req.body;
  try {
    const order = new Order({ user, items, total });
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Get User Orders
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
