const express = require("express");
const cors = require("cors");
const prisma = require("./db/prisma");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const adminRoutes = require("./routes/admin.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Chess Academy API работает",
  });
});

app.get("/api/test-db", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json({
      success: true,
      users,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const user = await prisma.user.create({
      data: {
        email,
        password,
        firstName,
        lastName,
      },
    });

    res.json({
      success: true,
      user,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
