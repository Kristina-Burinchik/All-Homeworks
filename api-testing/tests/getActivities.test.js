const axios = require("axios");
const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

const activitySchema = {
  id: expect.any(Number),
  title: expect.any(String),
  dueDate: expect.any(String),
  completed: expect.any(Boolean),
};

describe("GET /Activities Tests", () => {
  test("Success", async () => {
    const response = await axios.get(BASE_URL);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    response.data.forEach((activity) => {
      expect(activity).toMatchObject(activitySchema);
    });
  });

  test("Negative Test (Invalid URL)", async () => {
    try {
      await axios.get(`${BASE_URL}/invalid`);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });
});
