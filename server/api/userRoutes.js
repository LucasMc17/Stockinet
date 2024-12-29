const router = require("express").Router();
const {
  models: { User },
} = require("../db");

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

router.post("/", async (req, res, next) => {
  try {
    const { username, stytchId } = req.body;
    const user = await User.create({ username, stytchId });
    res.json(user);
  } catch (err) {
    next(err);
  }
});
