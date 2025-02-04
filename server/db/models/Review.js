const Sequelize = require("sequelize");
const db = require("../db");

const Review = db.define("review", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  stars: {
    type: Sequelize.INTEGER,
    max: 5,
    min: 1,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING,
  },
});

module.exports = Review;
