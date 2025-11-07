import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

// 🟢 Criar agendamento com relações (usuario e imovel)
export const create = async (agenda) => {
  const { usuarioId, imovelId, dataVisita, horario, telefone, observacoes, status } = agenda;

  return await prisma.agendamento.create({
    data: {
      dataVisita,
      horario,
      telefone,
      observacoes,
      status,
      usuario: { connect: { id: usuarioId } },
      imovel: { connect: { id: imovelId } }
    },
    include: {
      usuario: true,
      imovel: true
    }
  });
};

// 🟡 Atualizar (mantendo as relações)
export const atualizar = async (id, agenda) => {
  const { usuarioId, imovelId, dataVisita, horario, telefone, observacoes, status } = agenda;

  return await prisma.agendamento.update({
    where: { id: Number(id) },
    data: {
      dataVisita,
      horario,
      telefone,
      observacoes,
      status,
      ...(usuarioId && { usuario: { connect: { id: usuarioId } } }),
      ...(imovelId && { imovel: { connect: { id: imovelId } } })
    },
    include: {
      usuario: true,
      imovel: true
    }
  });
};

// 🟢 Listar todos os agendamentos com imóvel e usuário
export const list = async () => {
  return await prisma.agendamento.findMany({
    include: {
      usuario: true,
      imovel: true
    }
  });
};

// 🔵 Buscar um agendamento por ID
export const getById = async (id) => {
  return await prisma.agendamento.findUnique({
    where: { id: Number(id) },
    include: {
      usuario: true,
      imovel: true
    }
  });
};

// 🔴 Remover agendamento
export const remove = async (id) => {
  return await prisma.agendamento.delete({
    where: { id: Number(id) }
  });
};
