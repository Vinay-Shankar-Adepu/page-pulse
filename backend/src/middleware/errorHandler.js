export const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.message === "Invalid URL") {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid URL including http:// or https://",
    });
  }

  if (err.code === "ECONNABORTED") {
    return res.status(504).json({
      success: false,
      error: "The website took too long to respond",
    });
  }

  if (err.message === "URL does not return an HTML page") {
    return res.status(415).json({
      success: false,
      error: "The provided URL does not return an HTML webpage",
    });
  }

  if (err.code === "ENOTFOUND") {
    return res.status(502).json({
      success: false,
      error: "The website could not be found",
    });
  }

  return res.status(500).json({
    success: false,
    error: "Unable to analyze this website",
  });
};