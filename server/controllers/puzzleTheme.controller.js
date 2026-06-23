const prisma = require("../db/prisma");

async function createTheme(req, res) {
  try {
    const { name } = req.body;

    const theme = await prisma.puzzleTheme.create({
      data: {
        name,
      },
    });

    res.status(201).json({
      success: true,
      theme,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getThemes(req, res) {
  try {
    const themes = await prisma.puzzleTheme.findMany({
      orderBy: {
        id: "asc",
      },
    });

    res.json({
      success: true,
      themes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  createTheme,
  getThemes,
};
