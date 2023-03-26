import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: any, res : any) {
  const clientes = await prisma.clientes.findMany();
  res.status(200).json(clientes);
}