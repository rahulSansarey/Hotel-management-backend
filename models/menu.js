const mongoose = require("mongoose");

const menu = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isdrink: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
    enum: ["starter", "maincourse", 'desert'],
  },
  category: {
    type: String,
    required: true,
    enum: ["veg", "nonveg"],
  },
  taste: {
    type: String,
    required: true,
    enum: ["sweet", "sour", "spicy"],
  },
});

const hotelList = mongoose.model("hotelList", menu);
module.exports = hotelList;
