import { list } from '../../model/favoritosModel.js';

export const getFavoritosController = async (req, res) => {
    const result = await list();
    
    res.status(201).json({
        message: 'Lista de favoritos',
        favoritos: result
    })
};
