const Sequelize = require("sequelize");
const db = require("../db");

const Section = db.define("section", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  index: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Section;
