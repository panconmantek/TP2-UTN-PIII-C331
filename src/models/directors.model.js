const { db } = require("../data/data");
const { DataTypes } = require("sequelize");

const directors = db.define("directors", {
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  nationality: { type: DataTypes.STRING },
  birthYear: { type: DataTypes.INTEGER },
});

module.exports = directors;
