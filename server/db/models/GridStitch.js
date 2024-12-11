const Sequelize = require("sequelize");
const db = require("../db");

const GridStitch = db.define("gridStitch", {
  order: { type: Sequelize.INTEGER, allowNull: false },
  type: { type: Sequelize.ENUM("P", "K", "CF", "CB"), allowNull: false },
  width: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
});

module.exports = GridStitch;
