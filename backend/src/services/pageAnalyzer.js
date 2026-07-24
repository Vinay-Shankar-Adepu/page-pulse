import axios from "axios";
import * as cheerio from "cheerio";

export const parseHtml = (html, status, responseTime) => {
  const $ = cheerio.load(html);

  const title = $("title").text().trim();

  const metaDescription =
    $('meta[name="description"]').attr("content")?.trim() || "";

  const h1Count = $("h1").length;

  const missingAltImages = $("img")
    .toArray()
    .filter((image) => !$(image).attr("alt")?.trim()).length;

  $("script, style, noscript").remove();

  const bodyText = $("body").text().replace(/\s+/g, " ").trim();

  const wordCount = bodyText ? bodyText.split(" ").filter(Boolean).length : 0;

  return {
    status,
    responseTime,
    title,
    metaDescription,
    h1Count,
    missingAltImages,
    wordCount,
  };
};

export const analyzePage = async (url) => {
  let parsedUrl;

  try {
    parsedUrl = new URL(url);
  } catch {
    throw new Error("Invalid URL");
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    throw new Error("Invalid URL");
  }

  const startTime = Date.now();

  const response = await axios.get(parsedUrl.toString(), {
    timeout: 10000,
    headers: {
      "User-Agent": "PagePulseBot/1.0",
    },
    validateStatus: () => true,
  });

  const responseTime = Date.now() - startTime;
  const contentType = response.headers["content-type"] || "";

  if (!contentType.includes("text/html")) {
    throw new Error("URL does not return an HTML page");
  }

  return parseHtml(response.data, response.status, responseTime);
};