import { remove } from '../../model/agendaModel.js'

export const deleteByIdAgendaController = async (req, res) => {
    const id = req.params.id;

    const result = await remove(+id)
    res.status(201).json({
        message: 'Visita cancelada com sucesso',
        agenda: result

    });
}