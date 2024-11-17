const movies = require("../models/movies.model");
const directors = require("../models/directors.model");
const errorHandler = require("../helper/errorHandler");

module.exports = {
  read: async (req, res) => {
    try {
      const items = await movies.findAll({
        include: [
          {
            model: directors,
            attributes: ["id", "name", "surname"],
          },
        ],
      });
      res.json(items);
    } catch (error) {
      const image = await errorHandler.getHttpCatImage(500);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(500).send(image);
      } else {
        res.status(500).json({
          message: "An error occurred while reading all movies",
          error: error.message,
        });
      }
    }
  },

  readOne: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await movies.findByPk(id, {
        include: directors,
      });

      if (!item) {
        const image = await errorHandler.getHttpCatImage(404);
        if (image) {
          res.set("Content-Type", "image/jpeg");
          return res.status(404).send(image);
        } else {
          return res.status(404).json({ message: "Director not found" });
        }
      }

      res.json(item);
    } catch (error) {
      const image = await errorHandler.getHttpCatImage(500);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(500).send(image);
      } else {
        res.status(500).json({
          message: "An error occurred while reading the movie",
          error: error.message,
        });
      }
    }
  },

  put: async (req, res) => {
    const { id } = req.params;
    const { title, genre, status, released, directorIds } = req.body;

    try {
      const movie = await movies.findByPk(id, {
        include: directors,
      });

      if (!movie) {
        const image = await errorHandler.getHttpCatImage(404);
        if (image) {
          res.set("Content-Type", "image/jpeg");
          return res.status(404).send(image);
        } else {
          return res.status(404).json({ message: "Movie not found" });
        }
      }

      const updateData = {};

      if (title) updateData.title = title;
      if (genre) updateData.genre = genre;
      if (status) updateData.status = status;
      if (released) updateData.released = released;

      await movie.update(updateData);

      if (directorIds && directorIds.length > 0) {
        const directorsToAdd = await directors.findAll({
          where: {
            id: directorIds,
          },
        });

        if (directorsToAdd.length !== directorIds.length) {
          const image = await errorHandler.getHttpCatImage(404);
          if (image) {
            res.set("Content-Type", "image/jpeg");
            return res.status(404).send(image);
          } else {
            return res
              .status(404)
              .json({ message: "One or more directors not found" });
          }
        }

        await movie.setDirectors(directorsToAdd);
      }

      res.status(200).json({ message: "Movie updated successfully", movie });
    } catch (error) {
      const image = await errorHandler.getHttpCatImage(500);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(500).send(image);
      } else {
        res.status(500).json({
          message: "An error occurred while updating the movie",
          error: error.message,
        });
      }
    }
  },

  remove: async (req, res) => {
    const { id } = req.params;

    try {
      const movie = await movies.findByPk(id);
      if (!movie) {
        const image = await errorHandler.getHttpCatImage(404);
        if (image) {
          res.set("Content-Type", "image/jpeg");
          return res.status(404).send(image);
        } else {
          return res.status(404).json({ message: "Movie not found" });
        }
      }

      await movies.destroy({
        where: { id },
      });

      res.status(204).send();
    } catch (error) {
      const image = await errorHandler.getHttpCatImage(500);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(500).send(image);
      } else {
        res.status(500).json({
          message: "An error occurred while removing the movie",
          error: error.message,
        });
      }
    }
  },

  create: async (req, res) => {
    const { title, genre, status, released, directorId } = req.body;

    if (!title || !genre || !status || !released || !directorId) {
      const image = await errorHandler.getHttpCatImage(400);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(400).send(image);
      } else {
        return res.status(400).json({
          message:
            "All fields (title, genre, status, released, directorId) are required",
        });
      }
    }

    try {
      const movie = await movies.create({ title, genre, status, released });

      const director = await directors.findByPk(directorId);
      if (!director) {
        const image = await errorHandler.getHttpCatImage(404);
        if (image) {
          res.set("Content-Type", "image/jpeg");
          return res.status(404).send(image);
        } else {
          return res.status(404).json({ message: "Director not found" });
        }
      }

      await movie.addDirector(director);

      res.status(201).json({
        message: "Movie created and associated with director successfully",
        movie,
        director,
      });
    } catch (error) {
      const image = await errorHandler.getHttpCatImage(500);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(500).send(image);
      } else {
        res.status(500).json({
          message: "An error occurred while creating the movie",
          error: error.message,
        });
      }
    }
  },
};
