import { remove } from '../../model/agendaModel.js'

export const deleteByIdAgendaController = async (req, res) => {

    try {

        const id = req.params.id;

        const result = await remove(+id)
        res.status(201).json({
            message: 'Visita cancelada com sucesso',
            agenda: result

        });
    }catch (error) {
        console.error("Erro ao cancelar visita:", error);
        res.status(500).json({
            message: "Erro ao cancelar visita",
            error: error.message
        });
    }
 
}