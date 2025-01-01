const router = require("express").Router();
const { sql } = require("@sequelize/core");
const {
  db,
  models: { Pattern, Grid, GridRow, GridStitch, User },
} = require("../db");
module.exports = router;
const { isAuthenticated } = require("../backendUtils/stytchClient");
const Sequelize = require("sequelize");

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
      include: [
        {
          model: Grid,
        },
        {
          association: "author",
        },
      ],
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

router.get("/preview/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const pattern = await Pattern.findByPk(id, {
      include: { association: "author" },
      attributes: [
        "id",
        "title",
        "description",
        "leadImage",
        "images",
        "difficulty",
      ],
    });
    res.json(pattern);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  const { method, page } = req.query;
  const offset = (page - 1) * 20;
  const dict = {
    purchases: "user_count DESC",
    recency: '"createdAt" DESC',
  };
  const sort = dict[method];
  try {
    // sql is not good with counting associated models, so this has to be done with raw sequel
    const [patterns, metadata] = await db.query(`SELECT 

    patterns.id, 

    patterns.title, 

    patterns."leadImage",
      
    patterns.difficulty,

    (SELECT COUNT(*) FROM purchasers WHERE "purchasers"."patternId" = patterns.id) AS user_count

    FROM patterns

    ORDER BY ${sort}
    
    OFFSET ${offset} ROWS

    FETCH NEXT 20 ROWS ONLY;`);

    res.json(patterns);
  } catch (err) {
    next(err);
  }
});
