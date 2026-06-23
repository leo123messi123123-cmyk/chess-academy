const express = require("express");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const router = express.Router();

router.get("/test", authMiddleware, roleMiddleware(["ADMIN"]), (req, res) => {
  res.json({
    success: true,
    message: "Добро пожаловать, администратор",
  });
});

module.exports = router;
