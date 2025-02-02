const Sequelize = require("sequelize");
const db = require("../db");

const _ = require("lodash");

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
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

User.beforeValidate((user, options) => {
  user.slug = _.kebabCase(user.username.slice(0, 50)) + "-" + user.id;
});

module.exports = User;
