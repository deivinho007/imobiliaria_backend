import { list } from '../../model/agendaModel.js'

export const getAgendaController = async (req, res) => {

    try {
        const result = await list()

        res.status(200).json({
            message: 'Visitas Agendadas',
            agenda: result
        });
    }catch (error) {
        console.error("Erro ao listar visitas:", error);
        res.status(500).json({
            message: "Erro ao listar visitas",
            error: error.message
        });
    }
}