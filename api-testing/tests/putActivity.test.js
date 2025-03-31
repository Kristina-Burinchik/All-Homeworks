const axios = require("axios");
const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

describe("PUT /Activities/{id} Tests", () => {
  test("Success", async () => {
    const updatedActivity = {
      title: "Updated Activity",
      dueDate: new Date().toISOString(),
      completed: true,
    };
    const response = await axios.put(`${BASE_URL}/1`, updatedActivity);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(updatedActivity);
  });

  test("Negative Test (Non-existent ID)", async () => {
    try {
      await axios.put(`${BASE_URL}/999`, { title: "Test" });
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
