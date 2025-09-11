import { atualizar } from "../../model/agendaModel.js";

export const putByIdAgendaController = async (req, res) => {
    try {
        const id = req.params.id;
        const agenda = req.body;

        const result = await atualizar(+id, agenda);

        res.json({
            message: `Visita com id ${id} agendada com sucesso!`,
            agenda: result
        })
    } catch (error) {
        console.error("Erro ao atualizar visita:", error);
        res.status(500).json({
            message: "Erro ao atualizar visita",
            error: error.message
        });
    }
}
