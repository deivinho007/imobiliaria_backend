import { create } from "../../model/favoritosModel.js";

export const createFavoritoController = async (req, res) => {
    try {
        const favorito = req.body;
        const result = await create(favorito);

        res.status(201).json({
            message: 'Favorito adicionado com sucesso',
            favorito: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao adicionar favorito',
            error: error.message
        });
    }
};
