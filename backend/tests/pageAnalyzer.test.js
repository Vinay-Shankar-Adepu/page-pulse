import { describe, expect, it } from "vitest";
import { parseHtml } from "../src/services/pageAnalyzer.js";

describe("parseHtml", () => {
  it("returns the correct report for valid HTML", () => {
    const html = `
      <!doctype html>
      <html>
        <head>
          <title>Test Website</title>
          <meta name="description" content="A sample test page">
        </head>
        <body>
          <h1>Main Heading</h1>
          <p>Hello world from Page Pulse.</p>
          <img src="hero.jpg" alt="Hero banner">
          <img src="product.jpg">
        </body>
      </html>
    `;

    const result = parseHtml(html, 200, 150);

    expect(result).toEqual({
      status: 200,
      responseTime: 150,
      title: "Test Website",
      metaDescription: "A sample test page",
      h1Count: 1,
      missingAltImages: 1,
      wordCount: 7,
    });
  });

  it("handles missing title and meta description", () => {
    const html = `
      <html>
        <head></head>
        <body>
          <p>Simple page content</p>
        </body>
      </html>
    `;

    const result = parseHtml(html, 200, 50);

    expect(result.title).toBe("");
    expect(result.metaDescription).toBe("");
    expect(result.h1Count).toBe(0);
  });

  it("counts images with empty or missing alt text", () => {
    const html = `
      <html>
        <body>
          <img src="one.jpg">
          <img src="two.jpg" alt="">
          <img src="three.jpg" alt="Product image">
        </body>
      </html>
    `;

    const result = parseHtml(html, 200, 75);

    expect(result.missingAltImages).toBe(2);
  });
});