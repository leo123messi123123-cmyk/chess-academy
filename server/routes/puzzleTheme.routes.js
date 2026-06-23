const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const puzzleThemeController = require("../controllers/puzzleTheme.controller");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  puzzleThemeController.createTheme,
);

router.get("/", puzzleThemeController.getThemes);

module.exports = router;
