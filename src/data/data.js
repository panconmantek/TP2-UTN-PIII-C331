const { Sequelize } = require("sequelize");

const db = new db("moviesutn", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

const testConnection = async () => {
  try {
    await db.authenticate();
    console.log("Connected");
  } catch (error) {
    error.message = `The connection to the database could not be established: ${error.message}`;
    console.error(error);
  }
};

module.exports = { db, testConnection };
