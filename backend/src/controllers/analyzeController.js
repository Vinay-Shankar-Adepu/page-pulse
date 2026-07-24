import { analyzePage } from "../services/pageAnalyzer.js";

export const analyzePageController = async (req, res, next) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        success: false,
        error: "URL is required",
      });
    }

    const report = await analyzePage(url);

    return res.json({
      success: true,
      data: report,
    });
  } catch (error) {
    next(error);
  }
};