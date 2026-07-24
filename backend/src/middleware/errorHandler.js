export const errorHandler = (error, req, res, next) => {
  console.error(error);

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Internal server error",
  });
};