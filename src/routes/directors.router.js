/**
 * @swagger
 * tags:
 *   name: Directors
 *   description: API para manejar una librería de películas y directores
 */

const express = require("express");
const router = express.Router();
const controller = require("../controllers/directors.controller");

/**
 * @swagger
 * /directors:
 *   get:
 *     summary: Obtener todos los directores y sus películas asociadas
 *     description: Esta ruta devuelve una lista de todos los directores y las películas asociadas a cada uno.
 *     tags:
 *       - Directors
 *     responses:
 *       200:
 *         description: Lista de directores con sus películas asociadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID único del director
 *                   name:
 *                     type: string
 *                     description: Nombre del director
 *                   movies:
 *                     type: array
 *                     description: Lista de películas asociadas al director
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: ID de la película
 *                         title:
 *                           type: string
 *                           description: Título de la película
 *                         genre:
 *                           type: string
 *                           description: Género de la película
 *                         released:
 *                           type: string
 *                           format: date
 *                           description: Fecha de lanzamiento de la película
 *                         status:
 *                           type: string
 *                           description: Estado de la película
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while reading all directors"
 *                 error:
 *                   type: string
 *                   example: "Error details"
 */
router.get("/", controller.read);

/**
 * @swagger
 * /directors/{id}:
 *   get:
 *     summary: Obtener un director por su ID
 *     description: Esta ruta devuelve un director específico junto con las películas asociadas.
 *     tags:
 *       - Directors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del director que se desea obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Director encontrado con las películas asociadas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID único del director
 *                 name:
 *                   type: string
 *                   description: Nombre del director
 *                 movies:
 *                   type: array
 *                   description: Lista de películas asociadas al director
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID de la película
 *                       title:
 *                         type: string
 *                         description: Título de la película
 *                       genre:
 *                         type: string
 *                         description: Género de la película
 *                       released:
 *                         type: string
 *                         format: date
 *                         description: Fecha de lanzamiento de la película
 *                       status:
 *                         type: string
 *                         description: Estado de la película
 *       404:
 *         description: Director no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Director not found"
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while reading the director"
 *                 error:
 *                   type: string
 *                   example: "Error details"
 */
router.get("/:id", controller.readOne);

/**
 * @swagger
 * /directors:
 *   post:
 *     summary: Crear un nuevo director
 *     description: Esta ruta permite crear un nuevo director en la librería de directores, con su información básica.
 *     tags:
 *       - Directors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - surname
 *               - nationality
 *               - birthYear
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del director
 *               surname:
 *                 type: string
 *                 description: Apellido del director
 *               nationality:
 *                 type: string
 *                 description: Nacionalidad del director
 *               birthYear:
 *                 type: integer
 *                 description: Año de nacimiento del director
 *     responses:
 *       201:
 *         description: Director creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Director created successfully"
 *                 director:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID único del director
 *                     name:
 *                       type: string
 *                       description: Nombre del director
 *                     surname:
 *                       type: string
 *                       description: Apellido del director
 *                     nationality:
 *                       type: string
 *                       description: Nacionalidad del director
 *                     birthYear:
 *                       type: integer
 *                       description: Año de nacimiento del director
 *       400:
 *         description: Error de validación de datos (campos faltantes)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "All fields (name, surname, nationality, birthYear) are required"
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while creating the director"
 *                 error:
 *                   type: string
 *                   example: "Error details"
 */
router.post("/", controller.create);

/**
 * @swagger
 * /directors/{id}:
 *   put:
 *     summary: Actualizar un director existente
 *     description: Esta ruta permite actualizar la información de un director existente en la librería de directores. Se debe proporcionar el ID del director y los campos que se desean actualizar.
 *     tags:
 *       - Directors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del director a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del director
 *               surname:
 *                 type: string
 *                 description: Apellido del director
 *               nationality:
 *                 type: string
 *                 description: Nacionalidad del director
 *               birthYear:
 *                 type: integer
 *                 description: Año de nacimiento del director
 *     responses:
 *       200:
 *         description: Director actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Director updated successfully"
 *                 director:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID único del director
 *                     name:
 *                       type: string
 *                       description: Nombre del director
 *                     surname:
 *                       type: string
 *                       description: Apellido del director
 *                     nationality:
 *                       type: string
 *                       description: Nacionalidad del director
 *                     birthYear:
 *                       type: integer
 *                       description: Año de nacimiento del director
 *       400:
 *         description: Error de validación de datos (ningún campo válido proporcionado)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No valid fields provided for update"
 *       404:
 *         description: Director no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Director not found"
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while updating the director"
 *                 error:
 *                   type: string
 *                   example: "Error details"
 */
router.put("/:id", controller.put);

/**
 * @swagger
 * /directors/{id}:
 *   delete:
 *     summary: Eliminar un director existente
 *     description: Esta ruta permite eliminar un director de la librería de directores utilizando su ID único. Si el director no se encuentra, se devuelve un error 404.
 *     tags:
 *       - Directors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del director a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Director eliminado exitosamente
 *       404:
 *         description: Director no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Director not found"
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "An error occurred while removing the director"
 *                 error:
 *                   type: string
 *                   example: "Error details"
 */
router.delete("/:id", controller.remove);

module.exports = router;
