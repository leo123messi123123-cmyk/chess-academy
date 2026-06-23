const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const puzzleController = require("../controllers/puzzle.controller");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  puzzleController.createPuzzle,
);

router.get("/", puzzleController.getPuzzles);

router.get("/:id", puzzleController.getPuzzleById);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  puzzleController.updatePuzzle,
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  puzzleController.deletePuzzle,
);

module.exports = router;
