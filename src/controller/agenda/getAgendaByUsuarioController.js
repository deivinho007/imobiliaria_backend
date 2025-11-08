import { findByUsuario } from '../../model/agendaModel.js';

export const getAgendaByUsuarioController = async (req, res) => {
  try {
    const { usuarioId } = req.params;

    console.log('🔍 Buscando agendamentos do usuário:', usuarioId);

    const result = await findByUsuario(usuarioId);

    res.status(200).json({
      message: `Agendamentos do usuário ${usuarioId} consultados com sucesso`,
      agendamentos: result
    });
  } catch (error) {
    console.error('❌ Erro ao buscar agendamentos do usuário:', error);
    res.status(500).json({
      message: 'Erro ao buscar agendamentos',
      error: error.message
    });
  }
};