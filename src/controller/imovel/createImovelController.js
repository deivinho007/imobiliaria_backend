import { create } from '../imovel/imovelModel.js'

export const createImovelController = async (req, res) => {
    const imovel = req.body;
    const result = await create(imovel);

    res.status(201).json({
        message: 'Imóvel criado com sucesso',
        imovel: result
    })
}