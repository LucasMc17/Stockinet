const Sequelize = require("sequelize");
const db = require("../db");

const Grid = db.define("grid", {
  name: {
    type: Sequelize.STRING,
  },
  data: {
    type: Sequelize.JSON,
    allowNull: false,
  },
});

module.exports = Grid;
