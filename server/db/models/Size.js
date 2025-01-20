const Sequelize = require("sequelize");
const db = require("../db");

const Size = db.define("size", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Default",
  },
});

module.exports = Size;
