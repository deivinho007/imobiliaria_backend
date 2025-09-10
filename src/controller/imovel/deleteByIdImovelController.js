import { remove } from '../../model/usuarioModel.js'

export const deleteByIdImovelController = async (req, res) => {
  const id = req.params.id;
  const result = await remove(+id)
  res.json({
    message: `Imóvel ${id} deletado`,
    imovel: result
  });
}
