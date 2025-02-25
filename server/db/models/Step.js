const Sequelize = require("sequelize");
const db = require("../db");

const Step = db.define("step", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  index: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Step;
