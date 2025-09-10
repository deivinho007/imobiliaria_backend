import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export const create = async (favoritos) =>{
    return await prisma.favorito.create({
        data: favoritos
    })
}


export const atualizar = async (id, favoritos) =>{
    return await prisma.favorito.update({
        where: { id },
        data: favoritos
    })
}

export const list = async () =>{
    return await prisma.favorito.findMany()
}

export const getById  =  async (id) =>{
    return await prisma.favorito.findUnique({
        where: {id: Number(id)}
    })                                                                     
}

export const remove =  async (id) =>{
    return await prisma.favorito.delete({
        where: {id: Number(id)}
    })                                                                     
}