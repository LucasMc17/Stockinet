const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
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
