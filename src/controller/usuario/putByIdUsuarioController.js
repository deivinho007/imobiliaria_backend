import { update } from '../../model/usuarioModel.js'

export const putByIdUsuarioController = async (req, res) => {

  try {
    const usuario = req.body;
    const id = req.params.id;

    // Se a senha estiver vazia ou apenas espaços, remove do objeto
    if (!usuario.senha || usuario.senha.trim() === "") {
      delete usuario.senha;
    }

    const result = await update(+id, usuario);

    res.json({
      message: 'Usuário editado com sucesso',
      usuario: result
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao editar usuário',
      error: error.message
    });

  }
}