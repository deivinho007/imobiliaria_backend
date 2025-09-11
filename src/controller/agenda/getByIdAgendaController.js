import { getById } from '../../model/agendaModel.js';
export const getByIdAgendaController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getById(Number(id));

        res.status(201).json({
            message: 'Vista encontrada',
            agenda: result
        });
    } catch (error) {
        console.error("Erro ao buscar visita:", error);
        res.status(500).json({
            message: "Erro ao buscar visita",
            error: error.message
        });
    }
}
