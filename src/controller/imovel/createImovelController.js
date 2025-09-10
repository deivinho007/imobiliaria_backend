import { create } from '../../model/imovelModel.js' // ← Correto

export const createImovelController = async (req, res) => {
    const imovel = req.body;
    const result = await create(imovel);

    res.status(201).json({
        message: 'Imóvel criado com sucesso',
        imovel: result
    })
}