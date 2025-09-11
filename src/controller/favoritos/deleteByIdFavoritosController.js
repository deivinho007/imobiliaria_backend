import { remove } from '../../model/favoritosModel.js'

export const deleteByIdFavoritosController = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await remove(+id)

        res.status(201).json({
            message: 'Favorito removido com sucesso',
            favoritos: result

        });
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao remover favorito',
            error: error.message
        });
    }
};