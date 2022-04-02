import PrismaClientPkg from "@prisma/client";

const prismaClient = PrismaClientPkg.PrismaClient;
const prisma = new prismaClient();

export default prisma;
