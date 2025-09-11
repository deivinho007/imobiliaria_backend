
import { update } from '../../model/usuarioModel.js'

export const putByIdUsuarioController = async (req, res) => {

  try {
    const usuario = req.body;
    const id = req.params.id;

    const result = await update(+id, usuario);

    res.json({
      message: 'Usuario editado com sucesso',
      usuario: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao editar usuário',
      error: error.message
    });

  }
}