import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: any, res : any) {
  const chamados = await prisma.chamados.findMany();
  res.status(200).json(chamados);
}