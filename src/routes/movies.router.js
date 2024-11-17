/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: API para manejar una librería de películas
 */

const express = require("express");
const router = express.Router();
const controller = require("../controllers/movies.controller");

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Obtiene todas las películas
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Lista de todas las películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de la película
 *                   title:
 *                     type: string
 *                     description: Título de la película
 *                   year:
 *                     type: integer
 *                     description: Año de lanzamiento
 */
router.get("/", controller.read);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Obtiene una película por ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Película encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 year:
 *                   type: integer
 *       404:
 *         description: Película no encontrada
 */
router.get("/:id", controller.readOne);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Crea una nueva película
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título de la película
 *               year:
 *                 type: integer
 *                 description: Año de lanzamiento
 *     responses:
 *       201:
 *         description: Película creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", controller.create);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Actualiza una película por ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la película
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Película actualizada exitosamente
 *       404:
 *         description: Película no encontrada
 */
router.put("/:id", controller.put);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Elimina una película por ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Película eliminada exitosamente
 *       404:
 *         description: Película no encontrada
 */
router.delete("/:id", controller.remove);

module.exports = router;
