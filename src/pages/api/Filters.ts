import { Prisma, PrismaClient } from '@prisma/client';
import { Filters } from '../Consulta';

const prisma = new PrismaClient();

export default async function handle(req: any, res : any) {

    const filters : Filters = req.query;

    const whereClauses: Prisma.chamadosWhereInput[] = [];

    if (filters.funcionario) {
        whereClauses.push({
            funcionario: {
                equals: filters.funcionario,
            },
        });
    }

    if (filters.tipo) {
        whereClauses.push({
            tipo: {
                equals: filters.tipo,
            },
        });
    }

    if (filters.status) {
        whereClauses.push({
            status: {
                equals: filters.status === 'Concluido' ? 0 : 1,
            },
        });
    }

    if (filters.cliente) {
        whereClauses.push({
            cliente: {
                equals: filters.cliente,
            },
        });
    }

    if (filters.dataInicial && filters.dataFinal) {
        whereClauses.push({
            createdAt: {
                gte: new Date(filters.dataInicial),
                lte: new Date(filters.dataFinal),
            },
        });
    }
    else if (filters.dataInicial) {
        whereClauses.push({
            createdAt: {
                gte: new Date(filters.dataInicial),
                lte: new Date(),
            }
        })
    }

    await prisma.chamados.findMany({
        where: {
            OR: whereClauses,

        },
        orderBy: {
            idchamados: 'desc'
        }
    }).then((response) => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json(error);
    });

}