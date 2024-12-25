const router = require("express").Router();
const {
  models: { User },
} = require("../db");

module.exports = router;

router.get("/by-stytch/:stytchId", async (req, res, next) => {
  try {
    const { stytchId } = req.params;
    const { id } = await User.findOne({
      where: {
        stytchId,
      },
    });
    res.json({ id, stytchId });
  } catch (err) {
    next(err);
  }
});
