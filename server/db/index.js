const db = require("./db");

const Pattern = require("./models/Pattern.js");

module.exports = {
  db,
  models: {
    Pattern,
  },
};
