const movies = require("./movies.model");
const directors = require("./directors.model");

movies.belongsToMany(directors, {
  through: "movies_directors",
  foreignKey: "idMovie",
});

directors.belongsToMany(movies, {
  through: "movies_directors",
  foreignKey: "idDirector",
});
