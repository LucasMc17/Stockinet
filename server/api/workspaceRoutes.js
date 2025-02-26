const router = require("express").Router();
const {
  db,
  models: { Pattern, Grid, Project, Size, Section, Step },
} = require("../db");
module.exports = router;
const { rejectWithoutAuth } = require("../backendUtils/stytchClient");
const { throw404 } = require("../backendUtils/errorHandling");

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
    const patterns = await req.user.getPatterns({
      where: { id: patternId },
      include: [
        { model: Grid },
        {
          model: Size,
          include: [
            {
              model: Section,
              order: [["index", "ASC"]],
              include: [{ model: Step, order: [["index", "ASC"]] }],
            },
          ],
        },
      ],
    });
    throw404(patterns[0]);
    const project = await Project.findOne({
      where: { patternId, userId: req.user.id },
      include: [{ model: Size }],
    });
    if (project) {
      await project.update({ lastAccessed: new Date() });
    }
    res.json({ pattern: patterns[0], currentSize: project.size?.id });
  } catch (err) {
    next(err);
  }
});
