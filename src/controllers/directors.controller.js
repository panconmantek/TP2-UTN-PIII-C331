const directors = require("../models/directors.model");
const movies = require("../models/movies.model");
const errorHandler = require("../helper/errorHandler");

module.exports = {
  read: async (req, res) => {
    try {
      const items = await directors.findAll({
        include: [
          {
            model: movies,
            attributes: ["id", "title", "genre", "released", "status"],
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
          message: "An error occurred while reading all directors",
          error: error.message,
        });
      }
    }
  },

  readOne: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await directors.findByPk(id, {
        include: [
          {
            model: movies,
            attributes: ["id", "title", "genre", "released", "status"],
          },
        ],
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
          message: "An error occurred while reading the director",
          error: error.message,
        });
      }
    }
  },

  put: async (req, res) => {
    const { id } = req.params;
    const { name, surname, nationality, birthYear } = req.body;

    try {
      const director = await directors.findByPk(id);

      if (!director) {
        const image = await errorHandler.getHttpCatImage(404);
        if (image) {
          res.set("Content-Type", "image/jpeg");
          return res.status(404).send(image);
        } else {
          return res.status(404).json({ message: "Director not found" });
        }
      }

      const fieldsToUpdate = {};
      if (name !== undefined) fieldsToUpdate.name = name;
      if (surname !== undefined) fieldsToUpdate.surname = surname;
      if (nationality !== undefined) fieldsToUpdate.nationality = nationality;
      if (birthYear !== undefined) fieldsToUpdate.birthYear = birthYear;

      if (Object.keys(fieldsToUpdate).length === 0) {
        return res.status(400).json({
          message: "No valid fields provided for update",
        });
      }

      await director.update(fieldsToUpdate);

      res
        .status(200)
        .json({ message: "Director updated successfully", director });
    } catch (error) {
      const image = await errorHandler.getHttpCatImage(500);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(500).send(image);
      } else {
        res.status(500).json({
          message: "An error occurred while updating the director",
          error: error.message,
        });
      }
    }
  },

  remove: async (req, res) => {
    const { id } = req.params;

    try {
      const director = await directors.findByPk(id);
      if (!director) {
        const image = await errorHandler.getHttpCatImage(404);
        if (image) {
          res.set("Content-Type", "image/jpeg");
          return res.status(404).send(image);
        } else {
          return res.status(404).json({ message: "Director not found" });
        }
      }

      await directors.destroy({
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
          message: "An error occurred while removing the director",
          error: error.message,
        });
      }
    }
  },

  create: async (req, res) => {
    const { name, surname, nationality, birthYear } = req.body;

    if (!name || !surname || !nationality || !birthYear) {
      const image = await errorHandler.getHttpCatImage(400);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(400).send(image);
      } else {
        return res.status(400).json({
          message:
            "All fields (name, surname, nationality, birthYear) are required",
        });
      }
    }

    try {
      const director = await directors.create({
        name,
        surname,
        nationality,
        birthYear,
      });

      res.status(201).json({
        message: "Director created successfully",
        director,
      });
    } catch (error) {
      const image = await errorHandler.getHttpCatImage(500);
      if (image) {
        res.set("Content-Type", "image/jpeg");
        return res.status(500).send(image);
      } else {
        res.status(500).json({
          message: "An error occurred while creating the director",
          error: error.message,
        });
      }
    }
  },
};
