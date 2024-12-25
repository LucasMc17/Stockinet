const stytch = require("stytch");
const {
  models: { User },
} = require("../db");

const devMode = process.env.NODE_ENV === "development";

const stytchId = devMode
  ? process.env.STYTCH_TEST_ID
  : process.env.STYTCH_LIVE_ID;

const stytchSecret = devMode
  ? process.env.STYTCH_TEST_SECRET
  : process.env.STYTCH_LIVE_SECRET;

const client = new stytch.Client({
  project_id: stytchId,
  secret: stytchSecret,
});

async function isAuthenticated(req, res, next) {
  try {
    const sessionJWT = req.cookies.stytch_session_jwt;
    const resp = await client.sessions.authenticateJwt({
      session_jwt: sessionJWT,
    });
    const user = await User.findOne({
      where: { stytchId: resp.session.user_id },
    });
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).send("Authentication failed");
  }
}

module.exports = { client, isAuthenticated };
