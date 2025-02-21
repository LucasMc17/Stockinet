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

router.get("/project/:patternId", rejectWithoutAuth, async (req, res, next) => {
  try {
    const { patternId } = req.params;
    const pattern = await req.user.getPatterns({
      where: { id: patternId },
    });
    if (!pattern.length) {
      throw new Error("pattern not found");
    }
    const project = await Project.findOne({
      where: { patternId, userId: req.user.id },
    });
    if (project) {
      await project.update({ lastAccessed: new Date() });
    }
    res.json(pattern[0]);
  } catch (err) {
    next(err);
  }
});
