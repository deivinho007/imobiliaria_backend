import { remove } from '../../model/imovelModel.js'

export const deleteByIdImovelController = async (req, res) => {

  try {
    const id = req.params.id;
    const result = await remove(+id)
    res.json({
      message: `Imóvel ${id} deletado`,
      imovel: result
    });


  } catch (error) {
    res.status(500).json({
      message: 'Erro ao deletar imóvel',
      error: error.message
    })
  }
};
