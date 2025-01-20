const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stytchId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
