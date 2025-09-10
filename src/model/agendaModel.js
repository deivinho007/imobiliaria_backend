import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()

export const create = async (agenda) =>{
    return await prisma.agendamento.create({
        data: agenda
    })
}

export const atualizar = async (id, agenda) =>{
    return await prisma.agendamento.update({
        where: { id },
        data: agenda
    })
}

export const list = async () =>{
    return await prisma.agendamento.findMany()
}

export const getById  =  async (id) =>{
    return await prisma.agendamento.findUnique({
        where: {id: Number(id)}
    })                                                                     
}

export const remove =  async (id) =>{
    return await prisma.agendamento.delete({
        where: {id: Number(id)}
    })                                                                     
}