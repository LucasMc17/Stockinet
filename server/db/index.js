const db = require("./db");

const Pattern = require("./models/Pattern.js");
const Grid = require("./models/Grid.js");
const User = require("./models/User.js");
const Size = require("./models/Size.js");
const Purchaser = require("./models/Purchaser.js");

Pattern.hasMany(Grid);
Grid.belongsTo(Pattern);

Pattern.hasMany(Size);
Size.belongsTo(Pattern);

Size.hasMany(Grid);
Grid.belongsToMany(Size, { through: "sizeGrids" });

Pattern.belongsTo(User, { as: "author" });

Pattern.belongsToMany(User, { through: Purchaser });
User.belongsToMany(Pattern, { through: Purchaser });

module.exports = {
  db,
  models: {
    Pattern,
    Grid,
    User,
    Purchaser,
  },
};
