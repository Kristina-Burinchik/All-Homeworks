const axios = require("axios");
const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

describe("POST /Activities Tests", () => {
  test("Success", async () => {
    const newActivity = {
      title: "New Activity",
      dueDate: new Date().toISOString(),
      completed: false,
    };
    const response = await axios.post(BASE_URL, newActivity);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      ...newActivity,
      id: expect.any(Number),
    });
  });

  test("Negative Test (Validation Error)", async () => {
    try {
      await axios.post(BASE_URL, {});
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });
});
