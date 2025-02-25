const db = require("./db");

const Pattern = require("./models/Pattern.js");
const Grid = require("./models/Grid.js");
const User = require("./models/User.js");
const Size = require("./models/Size.js");
const Project = require("./models/Project.js");
const Yarn = require("./models/Yarn.js");
const Needle = require("./models/Needle.js");
const Review = require("./models/Review.js");
const Section = require("./models/Section.js");
const Step = require("./models/Step.js");

Pattern.hasMany(Grid);
Grid.belongsTo(Pattern);

Pattern.hasMany(Size);
Size.belongsTo(Pattern);

Size.hasMany(Grid);
Grid.belongsToMany(Size, { through: "sizeGrids" });

Size.hasMany(Section);
Section.belongsTo(Size);

Section.hasMany(Step);
Step.belongsTo(Section);

Pattern.belongsTo(User, { as: "author" });

Pattern.belongsToMany(User, { through: Project });
User.belongsToMany(Pattern, { through: Project });

Pattern.hasMany(Yarn);
Yarn.belongsTo(Pattern);

Pattern.hasMany(Needle);
Needle.belongsTo(Pattern);

Pattern.hasMany(Review);
Review.belongsTo(Pattern);

User.hasMany(Review);
Review.belongsTo(User);

module.exports = {
  db,
  models: {
    Pattern,
    Grid,
    User,
    Project,
    Yarn,
    Needle,
    Review,
    Size,
    Section,
    Step,
  },
};
