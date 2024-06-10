const { Router } = require("express");
const IngredientController = require("../controllers/ingredient.controller");

const ingredientsRouter = Router();

ingredientsRouter.get("/", IngredientController.getAllIngredients);
ingredientsRouter.post("/", IngredientController.addIngredient);

module.exports = ingredientsRouter;
