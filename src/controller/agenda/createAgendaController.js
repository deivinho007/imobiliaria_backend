import { create } from "../../model/agendaModel.js";

export const createAgendaController = async (req, res) => {
    try {
        const agenda = req.body;

        const result = await create(agenda);
        res.status(201).json({
            message: 'Visita agendada com sucesso',
            agenda: result
        });
    } catch (error) {
        console.error("Erro ao criar agenda:", error);
        res.status(500).json({
            message: "Erro ao agendar visita",
            error: error.message
        });
    }
};
