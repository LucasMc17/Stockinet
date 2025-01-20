const Sequelize = require("sequelize");
const db = require("../db");

const Grid = db.define("grid", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  data: {
    type: Sequelize.JSON,
    allowNull: false,
  },
});

module.exports = Grid;
