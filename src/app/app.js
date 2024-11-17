const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");
const port = process.env.PORT || 4004;

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Librería de Películas",
    version: "1.0.0",
    description: "Documentación de la API REST para manejar películas",
  },
  servers: [{ url: `http://localhost:${port}`, description: "Servidor local" }],
};

const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "../routes/*.js")], 
};

const swaggerSpec = swaggerJsdoc(options);

const moviesRouter = require("../routes/movies.router");
const directorsRouter = require("../routes/directors.router");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views")); 

app.use(morgan("dev"));
app.use(express.json());

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/movies", moviesRouter);
app.use("/directors", directorsRouter);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Bienvenido a la API de Películas",
    description:
      "Esta API permite gestionar información de películas y directores. Consulta la documentación en /api-doc para conocer más.",
  });
});

app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

module.exports = app;
