const Sequelize = require("sequelize");
const db = require("../db");

const Purchaser = db.define("purchaser", {
  lastAccessed: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Purchaser;
