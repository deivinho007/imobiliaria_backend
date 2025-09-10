import {remove} from '../../model/favoritosModel.js'

// Deletar
export const deleteByIdFavoritosController = async (req, res) => {
    const id = req.params.id;
    const result = await remove(+id)

    res.status(201).json({
         message: 'Favorito removido com sucesso',
         favoritos: result

     });
};