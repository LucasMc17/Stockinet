const Sequelize = require("sequelize");
const db = require("../db");

const Needle = db.define("needle", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  type: {
    type: Sequelize.ENUM("STRAIGHT", "CIRCULAR", "DOUBLE-POINTED"),
  },
  material: {
    type: Sequelize.ENUM("METAL", "WOOD", "N/A"),
  },
  productLink: {
    type: Sequelize.STRING,
  },
  customDescription: {
    type: Sequelize.STRING,
  },
  size: {
    type: Sequelize.ENUM(
      "1",
      "1.25",
      "1.5",
      "1.75",
      "2",
      "2.25",
      "2.75",
      "3",
      "3.25",
      "3.5",
      "3.75",
      "4",
      "4.5",
      "5",
      "5.5",
      "6",
      "6.5",
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "12",
      "16",
      "19",
      "25",
    ),
  },
});

Needle.beforeValidate((needle, options) => {
  if (
    !needle.customDescription &&
    (!needle.size || !needle.material || !needle.type)
  ) {
    throw new Error(
      "Needle must have a custom description or a size, material and type!",
    );
  }
});

module.exports = Needle;
