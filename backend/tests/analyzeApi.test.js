import { describe, expect, it } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("POST /api/analyze", () => {
  it("returns 400 when the URL is missing", async () => {
    const response = await request(app)
      .post("/api/analyze")
      .send({});

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.error).toBe("URL is required");
  });

  it("returns 400 for an invalid URL", async () => {
    const response = await request(app)
      .post("/api/analyze")
      .send({ url: "not-a-valid-url" });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});