import { getById } from '../../model/usuarioModel.js'


export const getByIdUsuarioController = async (req, res) => {

  try {
    const id = req.params.id;

    const result = await getById(+id);

    res.json({
      message: `Perfil do Usuário com id ${id} consultado com sucesso`,
      profile: result
    });

  } catch (error) {
    res.status(500).json({
      message: 'Erro ao consultar perfil do usuário',
      error: error.message
    });
  }
}
