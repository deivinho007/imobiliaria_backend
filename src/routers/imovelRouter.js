import express from 'express';
import { createImovelController } from '../controller/imovel/createImovelController.js';
import { listImovelController } from '../controller/imovel/listImovelController.js';
import { getByIdImovelController } from '../controller/imovel/getByIdImovelController.js';
import { putByIdImovelController } from '../controller/imovel/putByIdImovelController.js';
import {deleteByIdImovelController} from '../controller/imovel/deleteByIdImovelController.js'

const router = express.Router();
// Listar

router.post('/', createImovelController);
router.get('/', listImovelController);
router.get('/:id', getByIdImovelController);
router.put('/:id', putByIdImovelController);
router.delete('/:id', deleteByIdImovelController);

export default router;