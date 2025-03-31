const axios = require("axios");
const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

describe("DELETE /Activities/{id} Tests", () => {
  test("Success", async () => {
    const response = await axios.delete(`${BASE_URL}/1`);
    expect(response.status).toBe(200);
  });

  test("Negative Test (Non-existent ID)", async () => {
    try {
      await axios.delete(`${BASE_URL}/999`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
