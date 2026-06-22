const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");

async function registerUser(data) {
  const { email, password, firstName, lastName } = data;

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("Пользователь уже существует");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,

      studentProfile: {
        create: {},
      },
    },

    include: {
      studentProfile: true,
    },
  });

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

module.exports = {
  registerUser,
};
