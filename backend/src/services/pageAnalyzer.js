import axios from "axios";
import * as cheerio from "cheerio";

export const analyzePage = async (url) => {
  // Validate URL
  try {
    new URL(url);
  } catch {
    throw new Error("Invalid URL");
  }

  const start = Date.now();

  const response = await axios.get(url, {
    timeout: 10000,
    headers: {
      "User-Agent": "PagePulseBot/1.0",
    },
    validateStatus: () => true,
  });

  const responseTime = Date.now() - start;

  const contentType = response.headers["content-type"] || "";

  if (!contentType.includes("text/html")) {
    throw new Error("URL does not return an HTML page");
  }

  const $ = cheerio.load(response.data);

  const title = $("title").text().trim();

  const metaDescription =
    $('meta[name="description"]').attr("content")?.trim() || "";

  const h1Count = $("h1").length;

  const missingAltImages = $("img")
    .toArray()
    .filter((img) => !$(img).attr("alt")?.trim()).length;

  const bodyText = $("body").text().replace(/\s+/g, " ").trim();

  const wordCount = bodyText
    ? bodyText.split(" ").filter(Boolean).length
    : 0;

  return {
    status: response.status,
    responseTime,
    title,
    metaDescription,
    h1Count,
    missingAltImages,
    wordCount,
  };
};