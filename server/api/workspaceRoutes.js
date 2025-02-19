const router = require("express").Router();
const {
  db,
  models: { Pattern, Grid, Project, Size },
} = require("../db");
module.exports = router;
const { rejectWithoutAuth } = require("../backendUtils/stytchClient");

router.get("/projects-by-user", rejectWithoutAuth, async (req, res, next) => {
  try {
    const patterns = await req.user.getPatterns({
      attributes: [
        "title",
        "leadImage",
        "slug",
        "id",
        "difficulty",
        "description",
        "type",
      ],
      order: [[db.col("project.lastAccessed"), "DESC"]],
    });
    res.json(patterns);
  } catch (err) {
    next(err);
  }
});
