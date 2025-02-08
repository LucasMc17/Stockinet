const router = require("express").Router();
const {
  db,
  models: { Pattern, Grid, Purchaser },
} = require("../db");
module.exports = router;
const {
  rejectWithoutAuth,
  checkAuth,
} = require("../backendUtils/stytchClient");
const Yarn = require("../db/models/Yarn");
const Needle = require("../db/models/Needle");
const Size = require("../db/models/Size");

router.get("/by-user/recents", rejectWithoutAuth, async (req, res, next) => {
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
      order: [[db.col("purchaser.lastAccessed"), "DESC"]],
      limit: 3,
    });
    res.json(patterns);
  } catch (err) {
    next(err);
  }
});

router.get("/by-user", rejectWithoutAuth, async (req, res, next) => {
  try {
    const patterns = await req.user.getPatterns({
      attributes: ["title", "id", "slug"],
    });
    res.json(patterns);
  } catch (err) {
    next(err);
  }
});

// router.get("/:slug", checkAuth, async (req, res, next) => {
//   try {
//     // first, find the pattern and return 404 if it doesn't exist
//     const { slug } = req.params;
//     const pattern = await Pattern.findOne({
//       where: {
//         slug,
//       },
//       include: [
//         {
//           model: Grid,
//         },
//         {
//           association: "author",
//         },
//       ],
//     });
//     if (!pattern) {
//       const error = new Error("Not found");
//       error.status = 404;
//       throw error;
//     }

//     if (req.user) {
//       //user is logged in
//       const associated = await pattern.hasUser(req.user);
//       if (associated) {
//         // user is logged in, pattern been purchased
//         const purchaser = await Purchaser.findOne({
//           where: { patternId: pattern.id, userId: req.user.id },
//         });
//         if (purchaser) {
//           await purchaser.update({ lastAccessed: new Date() });
//           const patternWithFlag = pattern.toJSON();
//           patternWithFlag.owned = true;
//           res.json(patternWithFlag);
//         }
//       } else {
//         // user is logged in, pattern exists but is not purchased
//         res.json({
//           id: pattern.id,
//           title: pattern.title,
//           description: pattern.description,
//           leadImage: pattern.leadImage,
//           images: pattern.images,
//           difficulty: pattern.difficulty,
//           author: pattern.author,
//           owned: false,
//         });
//       }
//     } else {
//       // user is not logged in
//       res.json({
//         id: pattern.id,
//         title: pattern.title,
//         description: pattern.description,
//         leadImage: pattern.leadImage,
//         images: pattern.images,
//         difficulty: pattern.difficulty,
//         author: pattern.author,
//         owned: false,
//       });
//     }
//   } catch (err) {
//     next(err);
//   }
// });

router.get("/:slug", checkAuth, async (req, res, next) => {
  // Later we can use checkAuth to see if the user already owns the pattern and change the button depending
  try {
    const { slug } = req.params;
    const pattern = await Pattern.findOne({
      where: {
        slug,
      },
      include: [
        {
          association: "author",
        },
        {
          model: Yarn,
        },
        {
          model: Needle,
        },
        {
          model: Size,
        },
      ],
    });
    // if (!pattern) {
    //   const error = new Error("Not found");
    //   error.status = 404;
    //   throw error;
    // }
    res.json(pattern);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  const { method, page, type, difficulty } = req.query;
  const whereList = [];
  if (type && type !== "null") {
    whereList.push(`patterns.type = '${type}'`);
  }
  if (difficulty && difficulty !== "null") {
    whereList.push(`patterns.difficulty = '${difficulty}'`);
  }
  const offset = (page - 1) * 40;
  const dict = {
    purchases: "user_count DESC",
    recency: '"createdAt" DESC',
  };
  const sort = dict[method];
  try {
    // sql is not good with counting associated models, so this has to be done with raw sequel
    const [patterns, metadata] = await db.query(`SELECT 

    COUNT(*) OVER () as TotalCount,

    patterns.id, 

    patterns.title, 

    patterns."leadImage",
      
    patterns.difficulty,

    patterns.slug,

    patterns.type,

    (SELECT COUNT(*) FROM purchasers WHERE "purchasers"."patternId" = patterns.id) AS user_count,

    (SELECT AVG(stars) FROM reviews WHERE "reviews"."patternId" = patterns.id) AS rating

    FROM patterns

    ${whereList.length ? `WHERE ${whereList.join(" AND ")}` : ""}

    ORDER BY ${sort}, "updatedAt" DESC
    
    OFFSET ${offset}

    FETCH NEXT 40 ROWS ONLY;`);

    res.json(patterns);
  } catch (err) {
    next(err);
  }
});
