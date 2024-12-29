const router = require("express").Router();
const {
  models: { Pattern, Grid, GridRow, GridStitch },
} = require("../db");
module.exports = router;
const { isAuthenticated } = require("../backendUtils/stytchClient");

router.get("/by-user", isAuthenticated, async (req, res, next) => {
  try {
    const patterns = await req.user.getPatterns({
      attributes: ["title", "id"],
    });
    res.json(patterns);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", isAuthenticated, async (req, res, next) => {
  try {
    const { id } = req.params;
    const pattern = await Pattern.findByPk(id, {
      include: {
        model: Grid,
        // include: {
        //   model: GridRow,
        //   include: {
        //     model: GridStitch,
        //     separate: true,
        //     order: [["order", "ASC"]],
        //   },
        //   separate: true,
        //   order: [["order", "ASC"]],
        // },
      },
    });
    res.json(pattern);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const patterns = await Pattern.findAll({
      attributes: ["title", "id"],
    });
    res.json(patterns);
  } catch (err) {
    next(err);
  }
});
