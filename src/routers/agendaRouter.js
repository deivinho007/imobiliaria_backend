import express from 'express';
import { createAgendaController } from '../controller/agenda/createAgendaController.js';
import { getAgendaController } from '../controller/agenda/getAgendaController.js';
import { getByIdAgendaController } from '../controller/agenda/getByIdAgendaController.js';
import { getAgendaByUsuarioController } from '../controller/agenda/getAgendaByUsuarioController.js';
import { putByIdAgendaController } from '../controller/agenda/putByIdAgendaController.js';
import { deleteByIdAgendaController } from '../controller/agenda/deleteByIdAgendaController.js';

const router = express.Router();

// IMPORTANTE: Rotas mais específicas ANTES das genéricas!

router.post('/', createAgendaController);
router.get('/', getAgendaController);

// ✅ Rota específica /usuario/:usuarioId ANTES de /:id
router.get('/usuario/:usuarioId', getAgendaByUsuarioController);

// ⚠️ Rota genérica /:id por último
router.get('/:id', getByIdAgendaController);

router.put('/:id', putByIdAgendaController);
router.delete('/:id', deleteByIdAgendaController);

export default router;