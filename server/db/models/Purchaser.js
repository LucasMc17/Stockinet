const Sequelize = require("sequelize");
const db = require("../db");

const Purchaser = db.define("purchaser", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  lastAccessed: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Purchaser;
