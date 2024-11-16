const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Obteniendo todas las películas");
});

router.post("/", (req, res) => {
  res.send("Creando una nueva película");
});

router.get("/:id", (req, res) => {
  res.send(`Obteniendo la película con ID: ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Editando la película con ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Borrando la película con ID: ${req.params.id}`);
});

module.exports = router;
