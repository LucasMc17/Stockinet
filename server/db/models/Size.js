const Sequelize = require("sequelize");
const db = require("../db");

const Size = db.define("size", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Default",
  },
});

module.exports = Size;
