import { create } from "../../model/favoritosModel.js";

// Criar favorito
export const createFavoritoController = async (req, res) => {
    const favorito = req.body;
    const result = await create(favorito);

    res.status(201).json({
        message: 'Favorito adicionado com sucesso',
        favorito: result
    });
};
