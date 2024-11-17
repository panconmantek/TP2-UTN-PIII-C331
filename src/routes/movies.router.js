/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: API para manejar una librería de películas y directores
 */

const express = require("express");
const router = express.Router();
const controller = require("../controllers/movies.controller");

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Obtiene todas las películas, incluyendo sus directores
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Lista de todas las películas con directores relacionados
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
 *                   genre:
 *                     type: string
 *                     description: Género de la película
 *                   status:
 *                     type: string
 *                     description: Estado de la película
 *                   released:
 *                     type: integer
 *                     description: Año de lanzamiento de la película
 *                   directors:
 *                     type: array
 *                     description: Lista de directores relacionados con la película
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: ID del director
 *                         name:
 *                           type: string
 *                           description: Nombre del director
 *                         surname:
 *                           type: string
 *                           description: Apellido del director
 *                         nationality:
 *                           type: string
 *                           description: Nacionalidad del director
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
 *                   description: ID de la película
 *                 title:
 *                   type: string
 *                   description: Título de la película
 *                 genre:
 *                   type: string
 *                   description: Género de la película
 *                 status:
 *                   type: string
 *                   description: Estado de la película
 *                 released:
 *                   type: integer
 *                   description: Año de lanzamiento de la película
 *                 directors:
 *                   type: array
 *                   description: Lista de directores relacionados con la película
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID del director
 *                       name:
 *                         type: string
 *                         description: Nombre del director
 *                       surname:
 *                         type: string
 *                         description: Apellido del director
 *                       nationality:
 *                         type: string
 *                         description: Nacionalidad del director
 *       404:
 *         description: Película no encontrada
 */
router.get("/:id", controller.readOne);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Crea una nueva película y la asocia con un director
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
 *               genre:
 *                 type: string
 *                 description: Género de la película
 *               status:
 *                 type: string
 *                 description: Estado de la película
 *               released:
 *                 type: integer
 *                 description: Año de lanzamiento de la película
 *               directorId:
 *                 type: integer
 *                 description: ID del director asociado a la película
 *             required:
 *               - title
 *               - genre
 *               - status
 *               - released
 *               - directorId
 *     responses:
 *       201:
 *         description: Película creada y asociada con director exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                 movie:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID de la película
 *                     title:
 *                       type: string
 *                       description: Título de la película
 *                     genre:
 *                       type: string
 *                       description: Género de la película
 *                     status:
 *                       type: string
 *                       description: Estado de la película
 *                     released:
 *                       type: integer
 *                       description: Año de lanzamiento de la película
 *                 director:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del director
 *                     name:
 *                       type: string
 *                       description: Nombre del director
 *                     surname:
 *                       type: string
 *                       description: Apellido del director
 *                     nationality:
 *                       type: string
 *                       description: Nacionalidad del director
 *       400:
 *         description: Error de validación - Falta uno o más campos obligatorios
 *       404:
 *         description: Director no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.post("/", controller.create);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Actualiza una película existente y sus directores
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la película a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Nuevo título de la película
 *               genre:
 *                 type: string
 *                 description: Nuevo género de la película
 *               status:
 *                 type: string
 *                 description: Nuevo estado de la película
 *               released:
 *                 type: integer
 *                 description: Nuevo año de lanzamiento de la película
 *               directorIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Lista de IDs de directores a asociar con la película
 *     responses:
 *       200:
 *         description: Película actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito
 *                 movie:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID de la película
 *                     title:
 *                       type: string
 *                       description: Título de la película
 *                     genre:
 *                       type: string
 *                       description: Género de la película
 *                     status:
 *                       type: string
 *                       description: Estado de la película
 *                     released:
 *                       type: integer
 *                       description: Año de lanzamiento de la película
 *       400:
 *         description: Error de validación - Cuerpo de solicitud no válido o sin datos necesarios
 *       404:
 *         description: Película no encontrada o uno o más directores no encontrados
 *       500:
 *         description: Error interno del servidor
 */
router.put("/:id", controller.put);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Elimina una película por su ID
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la película que se desea eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Película eliminada exitosamente
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/:id", controller.remove);

module.exports = router;
