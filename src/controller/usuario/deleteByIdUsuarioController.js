import { remove } from '../../model/usuarioModel.js'

export const deleteByIdUsuarioController = async (req, res) => {
  const id = req.params.id;
  const result = await remove(+id)
  res.json({
    message: `Usuario ${id} deletado`,
    usuario: result
  });
}
