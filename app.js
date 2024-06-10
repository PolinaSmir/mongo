const express = require("express");
const app = express();
const SaladController = require("./controllers/salad.controller");
const { errorHandler } = require("./errorHandler");

app.use(express.json());

app.get("/", SaladController.getAllSalads);
app.post("/", SaladController.createSalad);
app.get("/:saladId", SaladController.getSalad);
app.put("/:saladId");
app.delete("/saladId");

app.use(errorHandler);

module.exports = app;
