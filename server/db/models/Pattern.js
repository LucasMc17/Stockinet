const Sequelize = require("sequelize");
const db = require("../db");

const _ = require("lodash");

const Pattern = db.define("pattern", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  leadImage: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  images: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  difficulty: {
    type: Sequelize.ENUM("BEGINNER", "INTERMEDIATE", "EXPERT"),
    allowNull: false,
  },
  type: {
    type: Sequelize.ENUM("HAT", "SWEATER", "SCARF", "MISC"),
    allowNull: false,
  },
  //   materials: {
  //     type: Sequelize.ARRAY,
  //   },
  gaugeStitches: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gaugeRows: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gaugeWidthInches: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  gaugeHeightInches: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  //   instructions: {
  //     type: Sequelize.ARRAY,
  //     allowNull: false,
  //   },
});

Pattern.beforeValidate((pattern, options) => {
  pattern.slug = _.kebabCase(pattern.title.slice(0, 50)) + "-" + pattern.id;
});

module.exports = Pattern;
