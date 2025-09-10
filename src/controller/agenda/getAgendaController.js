import { list } from '../../model/agendaModel.js'

export const getAgendaController = async (req, res) => {
    const result = await list()

    res.status(200).json({
        message: 'Visitas Agendadas',
        agenda: result
    });
}