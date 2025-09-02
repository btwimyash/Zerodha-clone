const mongoose = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// Correct way: use mongoose.model, not "new model"
const HoldingsModel = mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
