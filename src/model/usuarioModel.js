import { PrismaClient } from '../generated/prisma/index.js'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const create = async (usuario) => {
    const senhaHash = await bcrypt.hash(usuario.senha, 10); 
    return await prisma.user.create({
      data: { ...usuario, senha: senhaHash },
      select: { id: true, email: true, nome: true }
    });
};

export const update = async (id, usuario) => {
    // 🔥 IMPORTANTE: Se a senha foi enviada, criptografa antes de salvar
    if (usuario.senha && usuario.senha.trim() !== "") {
        const senhaHash = await bcrypt.hash(usuario.senha, 10);
        usuario.senha = senhaHash;
    }

    return await prisma.user.update({
        where: { id },
        data: usuario,
        select: { id: true, email: true, nome: true }
    });
}

export const list = async () => {
    return await prisma.user.findMany({
        select: { id: true, email: true, nome: true }
    });
}

export const getById = async (id) => {
    return await prisma.user.findUnique({
        where: { id: Number(id) },
        select: { id: true, email: true, nome: true }
    });                                                                     
}

export const remove = async (id) => {
    return await prisma.user.delete({
        where: { id: Number(id) },
        select: { id: true, email: true, nome: true }
    });                                                                     
}

export const getByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email } });
};