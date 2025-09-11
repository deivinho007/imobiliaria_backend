import { list } from "../../model/imovelModel.js";

export const listImovelController = async (req, res) => {

    try {
        const result = await list();
        res.json({
            message: 'Imóveis listados com sucesso',
            imovel: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao listar imóveis',
            error: error.message
        })
    }
}