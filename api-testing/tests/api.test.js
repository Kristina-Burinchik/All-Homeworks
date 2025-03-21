const axios = require("axios");
const BASE_URL = "https://fakerestapi.azurewebsites.net/api/v1/Activities";

const activitySchema = {
  id: expect.any(Number),
  title: expect.any(String),
  dueDate: expect.any(String),
  completed: expect.any(Boolean),
};

describe("API Activities Tests", () => {
  test("GET /Activities - Success", async () => {
    const response = await axios.get(BASE_URL);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    response.data.forEach((activity) => {
      expect(activity).toMatchObject(activitySchema);
    });
  });

  test("GET /Activities - Negative Test (Invalid URL)", async () => {
    try {
      await axios.get(`${BASE_URL}/invalid`);
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  test("GET /Activities/{id} - Success", async () => {
    const response = await axios.get(`${BASE_URL}/1`);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(activitySchema);
  });

  test("GET /Activities/{id} - Negative Test (Non-existent ID)", async () => {
    try {
      await axios.get(`${BASE_URL}/999`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });

  test("POST /Activities - Success", async () => {
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
    }); // Убедитесь, что id возвращается
  });

  test("POST /Activities - Negative Test (Validation Error)", async () => {
    try {
      await axios.post(BASE_URL, {});
    } catch (error) {
      expect(error.response.status).toBe(400);
    }
  });

  test("PUT /Activities/{id} - Success", async () => {
    const updatedActivity = {
      title: "Updated Activity",
      dueDate: new Date().toISOString(),
      completed: true,
    };
    const response = await axios.put(`${BASE_URL}/1`, updatedActivity);
    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(updatedActivity);
  });

  test("PUT /Activities/{id} - Negative Test (Non-existent ID)", async () => {
    try {
      await axios.put(`${BASE_URL}/999`, { title: "Test" });
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });

  test("DELETE /Activities/{id} - Success", async () => {
    const response = await axios.delete(`${BASE_URL}/1`);
    expect(response.status).toBe(200);
  });

  test("DELETE /Activities/{id} - Negative Test (Non-existent ID)", async () => {
    try {
      await axios.delete(`${BASE_URL}/999`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
