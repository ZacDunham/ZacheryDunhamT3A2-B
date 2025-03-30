const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("MenuItem", MenuItemSchema);
