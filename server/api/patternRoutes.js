const router = require("express").Router();
const {
  models: { Pattern, Grid, GridRow, GridStitch },
} = require("../db");
module.exports = router;
// const {requireToken} = require('./requireToken');

router.get("/", async (req, res, next) => {
  try {
    const patterns = await Pattern.findAll({
      include: {
        model: Grid,
        include: {
          model: GridRow,
          include: {
            model: GridStitch,
            separate: true,
            order: [["order", "ASC"]],
          },
          separate: true,
          order: [["order", "ASC"]],
        },
      },
    });
    res.json(patterns);
  } catch (err) {
    next(err);
  }
});