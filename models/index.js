const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DB = process.env.DB_NAME || "fe-test";

mongoose.connect(`mongodb://localhost:27017/${DB}`);

const saladSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  weight: Number,
  ingredients: {
    type: Array,
    required: true,
  },
  sauce: String,
  dietType: String,
  spicy: Boolean,
  expired: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => value >= new Date(),
    },
  },
});

const Salad = mongoose.model("Salad", saladSchema);

module.exports = {
  Salad,
};
