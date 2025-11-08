import { getById } from '../../model/agendaModel.js';

export const getByIdAgendaController = async (req, res) => {
  try {
    const { id } = req.params; // vem da URL /agenda/:id

    console.log('🔍 Buscando agendamentos do usuário:', id);

    const result = await getById(Number(id));

    if (!result || result.length === 0) {
      return res.status(404).json({
        message: `Nenhum agendamento encontrado para o usuário ${id}`
      });
    }

    res.status(200).json({
      message: `Agendamentos do usuário ${id} consultados com sucesso`,
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
