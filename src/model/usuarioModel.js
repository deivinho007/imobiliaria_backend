import { PrismaClient } from '../generated/prisma/index.js'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const create = async (usuario) => {
    const senhaHash = await bcrypt.hash(usuario.senha, 10); 
    return await prisma.user.create({
      data: { ...usuario, senha: senhaHash }
    });
  };

export const update = async (id, usuario) =>{
    return await prisma.user.update({
        where: { id },
        data: usuario
    })
}

export const list = async () =>{
    return await prisma.user.findMany()
}

export const getById  =  async (id) =>{
    return await prisma.user.findUnique({
        where: {id: Number(id)}
    })                                                                     
}

export const remove =  async (id) =>{
    return await prisma.user.delete({
        where: {id: Number(id)}
    })                                                                     
}

export const getByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email } });
  };
  