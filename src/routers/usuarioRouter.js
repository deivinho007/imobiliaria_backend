import express from 'express';
import {createUsuarioController} from '../controller/usuario/createUsuarioController.js';
import { listUsuarioController } from '../controller/usuario/listUsuarioController.js';
import { getByIdUsuarioController} from '../controller/usuario/getByIdUsuarioController.js'
import { putByIdUsuarioController } from '../controller/usuario/putByIdUsuarioController.js';
import { deleteByIdUsuarioController } from '../controller/usuario/deleteByIdUsuarioController.js';

const router = express.Router();

// Listar
router.post('/', createUsuarioController);
router.get('/', listUsuarioController);
router.get('/:id', getByIdUsuarioController);
router.put('/:id', putByIdUsuarioController);
router.delete('/:id', deleteByIdUsuarioController);



export default router;
