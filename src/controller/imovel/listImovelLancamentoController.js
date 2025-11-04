import { listLancamento } from "../../model/imovelModel.js";

export const listImovelLancamentoController  = async (req, res) => {

    try {
        const result = await listLancamento();
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