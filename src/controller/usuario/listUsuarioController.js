import { list } from "../../model/usuarioModel.js";

export const listUsuarioController = async (req, res) => {

  try {
    const result = await list();
    res.json({
      message: 'Usúarios listados com sucesso',
      usuario: result
    });

  } catch (error) {
    res.status(500).json({
      message: 'Erro ao listar usuários',
      error: error.message
    });
  }
}