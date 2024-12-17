const router = require("express").Router();
const client = require("../backendUtils/stytchClient");

module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    const { email, password, session_duration_minutes } = req.body;
    const resp = await client.passwords.authenticate({
      email,
      password,
      session_duration_minutes,
    });
    if (resp.status_code !== 200) {
      console.error("Authentication error");
      res.status(500).send();
      return;
    }
    console.log("token: ", resp.session_token);
    req.session.sessionToken = resp.session_token;
    res.status(200).json({});
  } catch (err) {
    next(err);
  }
});
