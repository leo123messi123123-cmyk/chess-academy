const { PrismaClient } = require("@prisma/client");

console.log("До создания клиента");

const prisma = new PrismaClient();

console.log("После создания клиента");
