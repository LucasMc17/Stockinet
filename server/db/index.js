const db = require("./db");

const Pattern = require("./models/Pattern.js");
const Grid = require("./models/Grid.js");
const User = require("./models/User.js");
const Size = require("./models/Size.js");

Pattern.hasMany(Grid);
Grid.belongsTo(Pattern);

Pattern.hasMany(Size);
Size.belongsTo(Pattern);

Size.hasMany(Grid);
Grid.belongsToMany(Size, { through: "sizeGrids" });

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
