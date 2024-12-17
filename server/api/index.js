const router = require("express").Router();
const session = require("express-session");

router.use(
  session({
    secret: "some-secret-key",
    resave: false,
    saveUninitialized: true,
  }),
);

module.exports = router;

router.use("/patterns", require("./patternRoutes"));
router.use("/auth", require("./authRoutes"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
