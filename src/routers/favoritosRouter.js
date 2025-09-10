import express from 'express';
import { createFavoritoController } from '../controller/favoritos/createFavoritosController.js';
import { getFavoritosController } from '../controller/favoritos/getFavoritosController.js';
import {getByIdFavoritosController} from '../controller/favoritos/getByIdFavoritosController.js';
import { deleteByIdFavoritosController } from '../controller/favoritos/deleteByIdFavoritosController.js';

const router = express.Router();

router.post('/', createFavoritoController);
router.get('/', getFavoritosController);
router.get('/:id', getByIdFavoritosController);
router.delete('/:id', deleteByIdFavoritosController);

export default router;