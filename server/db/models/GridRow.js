const Sequelize = require("sequelize");
const db = require("../db");

const GridRow = db.define("gridRow", {
  order: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = GridRow;
