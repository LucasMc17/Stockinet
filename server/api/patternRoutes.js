const router = require("express").Router();
const {
  models: { Pattern, Grid, GridRow, GridStitch, User },
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
      },
    });
    if (!pattern) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    const associated = await pattern.hasUser(req.user);
    if (associated) {
      res.json(pattern);
    } else {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
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
