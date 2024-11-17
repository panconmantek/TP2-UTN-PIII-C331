const express = require("express");
const router = express.Router();
const controller = require("../controllers/directors.controller");

router.get("/", controller.read);

router.get("/:id", controller.readOne);

router.post("/", controller.create);

router.put("/:id", controller.put);

router.delete("/:id", controller.remove);

module.exports = router;
