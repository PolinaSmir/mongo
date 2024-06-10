const { Router } = require("express");
const saladRouter = require("./salad");
const ingredientsRouter = require("./ingredients");

const router = Router();

router.use("/salads", saladRouter);
router.use("/ingredients", ingredientsRouter);

module.exports = router;
