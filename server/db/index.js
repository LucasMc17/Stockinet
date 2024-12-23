const db = require("./db");

const Pattern = require("./models/Pattern.js");
const Grid = require("./models/Grid.js");
const GridRow = require("./models/GridRow.js");
const GridStitch = require("./models/GridStitch.js");

Pattern.hasMany(Grid);
Grid.belongsTo(Pattern);

Grid.hasMany(GridRow);
GridRow.belongsTo(Grid);

GridRow.hasMany(GridStitch);
GridStitch.belongsTo(GridRow);

module.exports = {
  db,
  models: {
    Pattern,
    Grid,
    GridRow,
    GridStitch,
  },
};
