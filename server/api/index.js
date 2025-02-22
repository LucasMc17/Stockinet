const router = require("express").Router();
const session = require("express-session");
require("dotenv").config();

// this is needed
router.use(
  session({
    secret: process.env.MY_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);

module.exports = router;

router.use("/patterns", require("./patternRoutes"));
router.use("/user", require("./userRoutes"));
router.use("/workspace", require("./workspaceRoutes"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
