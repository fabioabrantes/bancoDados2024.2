import { PrismaClient,User,Book } from '@prisma/client';

const prisma = new PrismaClient();
export {prisma, User,Book };