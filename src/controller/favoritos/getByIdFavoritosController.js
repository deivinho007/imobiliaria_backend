import { getById } from '../../model/favoritosModel.js';
export const getByIdFavoritosController = async (req, res) => {
    const { id } = req.params;
    const result = await getById(Number(id));

    res.status(201).json({
        message: 'Favorito encontrado',
        favorito: result
    })
};