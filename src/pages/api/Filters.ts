import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req: any, res : any) {

    // const filters = req.query;

    // const whereClauses: any[] = [];

    // if (filters.Func) {
    //     whereClauses.push({
    //         funcionario: {
    //             equals: filters.Func,
    //         },
    //     });
    // }

    // if (filters.tipo) {
    //     whereClauses.push({
    //         tipo: {
    //             equals: filters.tipo,
    //         },
    //     });
    // }

    // if (filters.stats) {
    //     whereClauses.push({
    //             status: {
    //             equals: filters.stats,
    //         },
    //     });
    // }

    // if (filters.cliente) {
    //     whereClauses.push({
    //             cliente: {
    //             equals: filters.cliente,
    //         },
    //     });
    // }

    // if (filters.initial && filters.final) {
    //     whereClauses.push({
    //         createdAt: {
    //             gte: new Date(filters.initial),
    //             lte: new Date(filters.final),
    //         },
    //     });
    // }
    // else if (filters.initial) {
    //     whereClauses.push({
    //         createdAt: {
    //             gte: new Date(filters.initial),
    //             lte: new Date(),
    //         }
    //     })
    // }

    // const result = await prisma.chamados.findMany({
    //     where: {
    //         AND: whereClauses,
    //     },
    // }).then((response) => {
    //     res.status(200).json(response);
    // }).catch((error) => {
    //     res.status(400).json({error: error});
    // });

}