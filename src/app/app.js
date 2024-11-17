const express = require("express");
const morgan = require("morgan");

const moviesRouter = require("../routes/movies.router");
const directorsRouter = require("../routes/directors.router");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/directors", directorsRouter);

app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

module.exports = app;
