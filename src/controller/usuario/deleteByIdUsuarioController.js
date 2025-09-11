import { remove } from '../../model/usuarioModel.js'

export const deleteByIdUsuarioController = async (req, res) => {

  try {
    const id = req.params.id;
    const result = await remove(+id)
    res.json({
      message: `Usuario ${id} deletado`,
      usuario: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao deletar usuário',
      error: error.message
    });
  }
}
