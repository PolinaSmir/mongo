const mongoose = require("mongoose");
const Salad = require("./Salad");
const Ingredient = require("./Ingredient");

const DB = process.env.DB_NAME || "fe-test";

start = async () => {
  await mongoose.connect(`mongodb://localhost:27017/${DB}`);
};

start();

module.exports = {
  Salad,
  Ingredient,
};
