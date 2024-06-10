const { Ingredient } = require("../models");

module.exports.findIngredient = async (req, res, next) => {
  try {
    const {
      body: { ingredients },
    } = req;

    const ingredientObjectIdArray = [];

    for (let i = 0; i < ingredients.length; i++) {
      const ingredientObject = await Ingredient.findOne({
        name: ingredients[i],
      });

      ingredientObjectIdArray.push(ingredientObject["_id"]);
    }

    console.log(ingredientObjectIdArray);

    req.ingredients = ingredientObjectIdArray;
    next();
  } catch (error) {
    next(error);
  }
};
