import { create } from '../../model/imovelModel.js'

export const createImovelController = async (req, res) => {

    try {
        const imovel = req.body;
        const result = await create(imovel);

        res.status(201).json({
            message: 'Imóvel criado com sucesso',
            imovel: result
        })
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao criar imóvel',
            error: error.message
        })
    }
}