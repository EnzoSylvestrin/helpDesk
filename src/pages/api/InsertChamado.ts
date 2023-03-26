import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: any, res : any) {

  const reqBody = req.body;

  await prisma.chamados.create({
    data: {
      funcionario: reqBody.user,
      cliente: reqBody.client,
      tipo: reqBody.type,
      descricao: reqBody.descricao,
      duracao: reqBody.duracao,
      status: 1
    }
  }).then(() => {
    res.status(200).json({ sucess: true });
  }).catch((error) => {
    res.status(400).json({ error: error });
  });

}