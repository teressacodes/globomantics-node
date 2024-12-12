const mongoose = require("mongoose");

const HouseSchema = new mongoose.Schema({
  houseInfo: {
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    },
    askingPrice: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  bids: [
    {
      amount: { type: Number, required: true },
      name: { type: String, required: true },
    },
  ],
});

const House = mongoose.model("House", HouseSchema);

module.exports = House;
