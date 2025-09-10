import { list } from "../../model/imovelModel.js";

export const listImovelController = async (req, res) => {
    const result = await list();
    res.json({
        message: 'Imóveis listados com sucesso',
        imovel: result
    })
}