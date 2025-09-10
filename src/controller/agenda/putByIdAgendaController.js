import { atualizar } from "../../model/agendaModel.js";

export const putByIdAgendaController = async (req, res) => {
    const id = req.params.id;
    const agenda = req.body;

    const result = await atualizar(+id, agenda);

    res.json({
        message: `Visita com id ${id} agendada com sucesso!`,
        agenda: result
    })
}