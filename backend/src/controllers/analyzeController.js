export const analyzePage = async (req, res, next) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        error: "URL is required",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Analysis endpoint is working",
      url,
    });
  } catch (error) {
    next(error);
  }
};