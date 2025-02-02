const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { checkAuth } = require("../backendUtils/stytchClient");

module.exports = router;

router.get("/by-stytch/:stytchId", async (req, res, next) => {
  try {
    const { stytchId } = req.params;
    const user = await User.findOne({
      where: {
        stytchId,
      },
      // include:
    });
    const { id, username } = user;
    res.json({ id, stytchId, username });
  } catch (err) {
    next(err);
  }
});

router.get("/:slug", checkAuth, async (req, res, next) => {
  try {
    const { slug } = req.params;
    const author = await User.findOne({
      where: {
        slug,
      },
    });
    if (!author) {
      const error = new Error("Not found");
      error.status = 404;
      throw error;
    }
    if (req.user?.id === author.id) {
      const authorWithFlag = pattern.toJSON();
      authorWithFlag.self = true;
      res.json(authorWithFlag);
    } else {
      res.json({
        id: author.id,
      });
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { username, stytchId } = req.body;
    const user = await User.create({ username, stytchId });
    res.json(user);
  } catch (err) {
    next(err);
  }
});
