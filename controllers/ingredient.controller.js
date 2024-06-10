const { Ingredient } = require("../models/index");

module.exports.addIngredient = async (req, res, next) => {
  try {
    const { body } = req;

    const created = await Ingredient.create(body);

    return res.status(201).send(created);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllIngredients = async (req, res, next) => {
  try {
    const allIngredients = await Ingredient.find({});

    return res.status(200).send(allIngredients);
  } catch (error) {
    next(error);
  }
};
