import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

// 🟢 Criar agendamento com relações (usuario e imovel)
export const create = async (agenda) => {
  const { usuarioId, imovelId, dataVisita, horario, telefone, observacoes, status } = agenda;

  // 🔍 Logs para debug
  console.log('🔍 Validando dados antes de criar:');
  console.log('   usuarioId:', usuarioId, '→', parseInt(usuarioId));
  console.log('   imovelId:', imovelId, '→', parseInt(imovelId));
  
  // ✅ Verifica se usuário existe
  const usuarioExiste = await prisma.user.findUnique({
    where: { id: parseInt(usuarioId) }
  });
  
  if (!usuarioExiste) {
    throw new Error(`Usuário com ID ${usuarioId} não encontrado`);
  }
  
  // ✅ Verifica se imóvel existe
  const imovelExiste = await prisma.imovel.findUnique({
    where: { id: parseInt(imovelId) }
  });
  
  if (!imovelExiste) {
    throw new Error(`Imóvel com ID ${imovelId} não encontrado`);
  }

  return await prisma.agendamento.create({
    data: {
      usuarioId: parseInt(usuarioId),
      imovelId: parseInt(imovelId),
      dataVisita: new Date(dataVisita),
      horario,
      telefone: telefone || null,
      observacoes: observacoes || null,
      status: status || 'pendente'
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
      ...(usuarioId && { usuarioId: parseInt(usuarioId) }),
      ...(imovelId && { imovelId: parseInt(imovelId) }),
      ...(dataVisita && { dataVisita: new Date(dataVisita) }),
      ...(horario && { horario }),
      ...(telefone !== undefined && { telefone: telefone || null }),
      ...(observacoes !== undefined && { observacoes: observacoes || null }),
      ...(status && { status })
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
    },
    orderBy: {
      dataVisita: 'desc'
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

// 🟣 Buscar agendamentos por usuário (CORRIGIDO - foto → fotoPrincipal)
export const findByUsuario = async (usuarioId) => {
  return await prisma.agendamento.findMany({
    where: { usuarioId: parseInt(usuarioId) },
    include: {
      usuario: {
        select: {
          id: true,
          nome: true,
          email: true
        }
      },
      imovel: {
        select: {
          id: true,
          titulo: true,
          localizacao: true,
          valor: true,
          fotoPrincipal: true,      // ✅ CORRIGIDO
          fotoSecundaria: true,     // ✅ ADICIONADO
          fotoTerciaria: true,      // ✅ ADICIONADO
          quartos: true,
          banheiros: true,
          garagens: true,
          metrosQuadrados: true,
          iptu: true,               // ✅ ADICIONADO
          ambiente: true,           // ✅ ADICIONADO
          conveniencias: true,      // ✅ ADICIONADO
          descricao: true           // ✅ ADICIONADO
        }
      }
    },
    orderBy: {
      dataVisita: 'desc'
    }
  });
};