import { getById } from "../../model/imovelModel";

export const getByIdImovelController = async (req, res) => {
    const id = req.params.id;

    const result = await getById(+id);
    res.json({
        message: `Imóvel  ${id} consultado com sucesso`,
        imovel: result
    })
}