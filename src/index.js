const app = require("./app/app");
const { testConnection } = require("./data/data");

const port = process.env.PORT || 4004;

app.listen(port, () => {
  testConnection();
  console.log(`Server running on port ${port}`);
});
