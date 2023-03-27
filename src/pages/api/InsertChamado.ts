import { PrismaClient } from '@prisma/client';
import { FormInputs } from '..';

const prisma = new PrismaClient();

export default async function handle(req: any, res : any) {

  const reqBody : any = req.body;

  await prisma.chamados.create({
    data: {
      funcionario: reqBody.funcionario,
      cliente: reqBody.cliente,
      tipo: reqBody.tipo,
      descricao: reqBody.descricao,
      duracao: reqBody.duracao,
      status: reqBody.status == "Pendente" ? 1 : 0,
    }
  }).then(() => {
    res.status(200).json({ sucess: true });
  }).catch((error: any) => {
    res.status(400).json({ error: error });
  });

}