const authService = require("../services/auth.service");

async function register(req, res) {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      success: true,
      user,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
}

module.exports = {
  register,
};
