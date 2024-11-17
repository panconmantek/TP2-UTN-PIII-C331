const { db } = require("../data/data");
const { DataTypes } = require("sequelize");

const movies = db.define("movies", {
  title: { type: DataTypes.STRING },
  genre: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  released: { type: DataTypes.INTEGER },
});

module.exports = movies;
