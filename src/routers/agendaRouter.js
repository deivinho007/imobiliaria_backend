import express from 'express';
import { createAgendaController } from '../controller/agenda/createAgendaController.js';
import { getAgendaController } from '../controller/agenda/getAgendaController.js';
import { getByIdAgendaController } from '../controller/agenda/getByIdAgendaController.js';
import { putByIdAgendaController } from '../controller/agenda/putByIdAgendaController.js';
import { deleteByIdAgendaController } from '../controller/agenda/deleteByIdAgendaController.js';

const router = express.Router();

router.post('/', createAgendaController);
router.get('/', getAgendaController);
router.get('/:id', getByIdAgendaController);
router.put('/:id', putByIdAgendaController);
router.delete('/:id', deleteByIdAgendaController);


export default router;