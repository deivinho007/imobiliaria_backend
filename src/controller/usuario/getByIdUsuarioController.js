import { getById } from '../../model/usuarioModel.js'


export const getByIdUsuarioController = async (req, res) => {
  const id = req.params.id;

  const result = await getById(+id);

  res.json({
    message: `Perfil do Usuário com id ${id} consultado com sucesso`,
    profile: result
  });
}
