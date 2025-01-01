const db = require("./db");

const Pattern = require("./models/Pattern.js");
const Grid = require("./models/Grid.js");
const User = require("./models/User.js");

Pattern.hasMany(Grid);
Grid.belongsTo(Pattern);

Pattern.belongsTo(User, { as: "author" });

Pattern.belongsToMany(User, { through: "purchasers" });
User.belongsToMany(Pattern, { through: "purchasers" });

module.exports = {
  db,
  models: {
    Pattern,
    Grid,
    User,
  },
};
