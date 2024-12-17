const Sequelize = require("sequelize");
const db = require("../db");

const Pattern = db.define("pattern", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // author: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
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

module.exports = Pattern;
