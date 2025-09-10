import { atualizar } from "../../model/imovelModel.js";

export const putByIdImovelController = async (req, res) => {
    const id = req.params.id;
    const imovel = req.body;

    const result = await atualizar(+id, imovel);

    res.json({
        message: `Imóvel com id ${id} atualizado com sucesso`,
        imovel: result
    })
}