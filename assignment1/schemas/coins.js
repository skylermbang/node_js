const mongoose = require("mongoose");
const { Schema } = mongoose;
const coinSchema = new Schema({
  coinId: {
    type: Number,
    required: true,
    unique: true,
  },
  coinName: {
    type: String,
    required: true,
    unique: true,
  },
  coinUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
});
module.exports = mongoose.model("Coins", coinSchema);
