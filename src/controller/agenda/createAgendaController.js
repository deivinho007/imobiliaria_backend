import { create } from "../../model/agendaModel.js";

export const createAgendaController = async (req, res) => {
    try {
        const agenda = req.body;
        
        // 🔍 DEBUG: Veja o que está chegando
        console.log('📥 Dados recebidos no controller:', agenda);
        console.log('🆔 usuarioId:', agenda.usuarioId, 'tipo:', typeof agenda.usuarioId);
        console.log('🏠 imovelId:', agenda.imovelId, 'tipo:', typeof agenda.imovelId);

        const result = await create(agenda);
        
        res.status(201).json({
            message: 'Visita agendada com sucesso',
            agenda: result
        });
    } catch (error) {
        console.error("❌ Erro ao criar agenda:", error);
        console.error("❌ Erro completo:", error.message);
        
        res.status(500).json({
            message: "Erro ao agendar visita",
            error: error.message
        });
    }
};