export const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  return res.status(500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
};