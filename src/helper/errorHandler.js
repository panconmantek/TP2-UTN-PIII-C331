const axios = require("axios");
const errorMessageUrl = "https://http.cat";

module.exports = {
  getHttpCatImage: async (code) => {
    try {
      const response = await axios.get(`${errorMessageUrl}/${code}`, {
        responseType: "arraybuffer",
      });
      return response.data;
    } catch (error) {
      return null;
    }
  },
};
