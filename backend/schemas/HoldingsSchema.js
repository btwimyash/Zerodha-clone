// backend/schemas/HoldingsSchema.js
const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
  product: { type: String },
  name: { type: String },
  qty: { type: Number },
  avg: { type: Number },
  price: { type: Number },
  net: { type: String },
  day: { type: String },
  isLoss: { type: Boolean }
});

// Export it correctly
module.exports = { HoldingsSchema };
