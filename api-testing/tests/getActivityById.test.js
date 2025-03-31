const axios = require("axios");
const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

describe("GET /Activities/{id} Tests", () => {
  test("Success", async () => {
    const response = await axios.get(`${BASE_URL}/1`);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      dueDate: expect.any(String),
      completed: expect.any(Boolean),
    });
  });

  test("Negative Test (Non-existent ID)", async () => {
    try {
      await axios.get(`${BASE_URL}/999`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
