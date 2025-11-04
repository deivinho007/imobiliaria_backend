import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export const create = async (imovel) =>{
    return await prisma.imovel.create({
        data: imovel
    })
}

export const atualizar = async (id, imovel) =>{
    return await prisma.imovel.update({
        where: { id },
        data: imovel
    })
}

export const list = async () =>{
    return await prisma.imovel.findMany()
}

export const listDestaque= async () =>{
    return await prisma.imovel.findMany({
        where: { destaque: true }
    })
}

export const listLancamento = async () =>{
    return await prisma.imovel.findMany({
        where: { lancamento: true }
    })
}

export const getById  =  async (id) =>{
    return await prisma.imovel.findUnique({
        where: {id: Number(id)}
    })                                                                     
}

export const remove =  async (id) =>{
    return await prisma.imovel.delete({
        where: {id: Number(id)}
    })                                                                     
}