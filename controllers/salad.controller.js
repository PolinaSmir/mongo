const { Salad } = require("../models/index");

module.exports.createSalad = async (req, res, next) => {
  try {
    const { body, ingredients } = req;

    const salad = await Salad.create({ ...body, ingredients });

    return res.status(201).send(salad);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllSalads = async (req, res, next) => {
  try {
    const allSalads = await Salad.find({}).populate("ingredients");

    return res.status(200).send(allSalads);
  } catch (error) {
    next(error);
  }
};

module.exports.getSalad = async (req, res, next) => {
  try {
    const {
      params: { saladId },
    } = req;

    const salad = await Salad.findById(saladId).populate("ingredients");

    if (!salad) {
      return res.status(400).send("There is no salad");
    }

    return res.status(200).send(salad);
  } catch (error) {
    next(error);
  }
};

module.exports.updateSalad = async (req, res, next) => {
  try {
    const {
      params: { saladId },
      body,
    } = req;

    const updated = await Salad.findByIdAndUpdate(saladId, body, { returnDocument: "after" });

    return res.status(200).send(updated);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSalad = async (req, res, next) => {
  try {
    const {
      params: { saladId },
    } = req;

    const deleted = await Salad.findByIdAndDelete(saladId);

    if (!deleted) {
      return res.status(400).send("There is no such salad");
    }

    return res.status(200).send(deleted);
  } catch (error) {
    next(error);
  }
};
