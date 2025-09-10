import { create } from "../../model/agendaModel.js";

export const createAgendaController = async (req, res) => {
    const agenda = req.body;

    const result = await create(agenda);
    res.status(201).json({
        message: 'Visita agendada com sucesso',
        agenda: result
    });
}