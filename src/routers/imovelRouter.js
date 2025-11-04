import express from 'express';
import { createImovelController } from '../controller/imovel/createImovelController.js';
import { listImovelController } from '../controller/imovel/listImovelController.js';
import { listImovelDestaqueController } from '../controller/imovel/listImovelDestaqueController.js';
import { listImovelLancamentoController } from '../controller/imovel/listImovelLancamentoController.js';
import { getByIdImovelController } from '../controller/imovel/getByIdImovelController.js';
import { putByIdImovelController } from '../controller/imovel/putByIdImovelController.js';
import {deleteByIdImovelController} from '../controller/imovel/deleteByIdImovelController.js'

const router = express.Router();
// Listar

router.post('/', createImovelController);
router.get('/', listImovelController);
router.get('/destaque', listImovelDestaqueController );
router.get('/lancamento', listImovelLancamentoController);
router.get('/:id', getByIdImovelController);
router.put('/:id', putByIdImovelController);
router.delete('/:id', deleteByIdImovelController);

export default router;