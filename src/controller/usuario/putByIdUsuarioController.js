
import { update } from '../../model/usuarioModel.js'

export const putByIdUsuarioController = async (req, res) =>{
  const usuario = req.body;
  const id = req.params.id;

  const result = await update(+id, usuario);

  res.json({
    message: 'Usuario editado com sucesso',
    usuario: result
  });
}
