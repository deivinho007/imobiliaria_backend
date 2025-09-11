import { getById } from '../../model/favoritosModel.js';
export const getByIdFavoritosController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getById(Number(id));

        res.status(201).json({
            message: 'Favorito encontrado',
            favorito: result
        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao buscar favorito',
            error: error.message
        });
    }
}
