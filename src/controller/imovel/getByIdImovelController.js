import { getById } from "../../model/imovelModel.js";

export const getByIdImovelController = async (req, res) => {

    try {
        const id = req.params.id;

        const result = await getById(+id);
        res.json({
            message: `Imóvel  ${id} consultado com sucesso`,
            imovel: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao consultar imóvel',
            error: error.message
        })
    }
}