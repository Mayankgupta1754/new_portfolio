const { processTwinChat } = require("./lib/processTwinChat");

module.exports = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const result = await processTwinChat(req.body || {});
    res.status(result.status).json(result.body);
  } catch (error) {
    if (error.code === "MISSING_API_KEY") {
      res.status(503).json({
        error:
          "The digital twin is not configured yet. Add OPENAI_API_KEY in Vercel environment variables.",
      });
      return;
    }
    console.error("Digital twin error:", error);
    res.status(500).json({
      error: "Twin is offline right now. Please try again shortly.",
    });
  }
};
