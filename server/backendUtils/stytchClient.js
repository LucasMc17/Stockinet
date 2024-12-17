const stytch = require("stytch");

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

module.exports = client;
