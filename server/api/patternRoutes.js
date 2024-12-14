const router = require("express").Router();
const {
  models: { Pattern, Grid, GridRow, GridStitch },
} = require("../db");
module.exports = router;
// const {requireToken} = require('./requireToken');

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const pattern = await Pattern.findByPk(id, {
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
    res.json(pattern);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  console.log("HITTING");
  try {
    const patterns = await Pattern.findAll({
      attributes: ["title", "id"],
    });
    res.json(patterns);
  } catch (err) {
    next(err);
  }
});
