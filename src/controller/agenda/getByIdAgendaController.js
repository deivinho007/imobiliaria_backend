import { getById } from '../../model/agendaModel.js';
export const getByIdAgendaController = async (req, res) => {
    const { id } = req.params;
    const result = await getById(Number(id));

    res.status(201).json({
        message: 'Vista encontrada',
        agenda: result
    })
};