const Sequelize = require("sequelize");
const db = require("../db");

const Yarn = db.define("yarn", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  weight: {
    type: Sequelize.ENUM("1", "2", "3", "4", "5", "6", "7"),
  },
  color: {
    type: Sequelize.STRING,
  },
  yardage: {
    type: Sequelize.INTEGER,
  },
  productLink: {
    type: Sequelize.STRING,
  },
  customDescription: {
    type: Sequelize.STRING,
  },
});

Yarn.beforeValidate((yarn, options) => {
  if (!yarn.customDescription && (!yarn.weight || !yarn.yardage)) {
    throw new Error(
      "Yard must have a custom description or a weight and yardage!",
    );
  }
});

module.exports = Yarn;
