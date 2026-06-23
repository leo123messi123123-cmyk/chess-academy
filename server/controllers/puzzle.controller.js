const prisma = require("../db/prisma");

async function createPuzzle(req, res) {
  try {
    const { title, fen, solution, difficulty, themeId } = req.body;

    const puzzle = await prisma.puzzle.create({
      data: {
        title,
        fen,
        solution,
        difficulty,
        themeId,
      },
    });

    res.status(201).json({
      success: true,
      puzzle,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getPuzzles(req, res) {
  try {
    const puzzles = await prisma.puzzle.findMany({
      include: {
        theme: true,
      },
    });

    res.json({
      success: true,
      puzzles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function getPuzzleById(req, res) {
  try {
    const id = Number(req.params.id);

    const puzzle = await prisma.puzzle.findUnique({
      where: {
        id,
      },
      include: {
        theme: true,
      },
    });

    if (!puzzle) {
      return res.status(404).json({
        success: false,
        message: "Задача не найдена",
      });
    }

    res.json({
      success: true,
      puzzle,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  createPuzzle,
  getPuzzles,
  getPuzzleById,
};
