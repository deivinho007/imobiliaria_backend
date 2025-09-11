import { list } from '../../model/favoritosModel.js';

export const getFavoritosController = async (req, res) => {
    try {
        const result = await list();

        res.status(201).json({
            message: 'Lista de favoritos',
            favoritos: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao buscar favoritos',
            error: error.message
        });
    }
}
