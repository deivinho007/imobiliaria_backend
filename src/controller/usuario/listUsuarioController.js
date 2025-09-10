import { list } from "../../model/usuarioModel.js";

export  const  listUsuarioController = async(req, res) => {
  const result = await list();
  res.json({
    message:'Usúarios listados com sucesso',
    usuario: result
  })
}