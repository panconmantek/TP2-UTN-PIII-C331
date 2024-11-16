const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Obteniendo todos los directores");
});

router.post("/", (req, res) => {
  res.send("Creando un nuevo director");
});

router.get("/:id", (req, res) => {
  res.send(`Obteniendo director con ID: ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Editando director con ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Borrando director con ID: ${req.params.id}`);
});

module.exports = router;
