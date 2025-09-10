import express from 'express';
import {createUsuarioController} from '../controller/usuario/createUsuarioController.js';
import { listUsuarioController } from '../controller/usuario/listUsuarioController.js';
import { getByIdUsuarioController} from '../controller/usuario/getByIdUsuarioController.js'
import { putByIdUsuarioController } from '../controller/usuario/putByIdUsuarioController.js';
import { deleteByIdUsuarioController } from '../controller/usuario/deleteByIdUsuarioController.js';
import { loginUsuarioController } from '../controller/usuario/loginUsuarioController.js';
import { autenticar } from '../middleware/authMiddleware.js';

const router = express.Router();

// Listar
router.post('/', createUsuarioController);
router.get('/', listUsuarioController);
router.get('/:id', getByIdUsuarioController);
router.put('/:id', putByIdUsuarioController);
router.delete('/:id', deleteByIdUsuarioController);

// Login
router.post('/login', loginUsuarioController);

// Rotas protegidas
router.get('/', autenticar, listUsuarioController);
router.get('/:id', autenticar, getByIdUsuarioController);
router.put('/:id', autenticar, putByIdUsuarioController);
router.delete('/:id', autenticar, deleteByIdUsuarioController);



export default router;
