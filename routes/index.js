import express from 'express';
import { paginaInicio, paginaNosotros, paginaOpiniones, paginaViajes } from '../controllers/paginasController.js';

const router = express.Router();

router.get('/', paginaInicio)
router.get('/nosotros', paginaNosotros)
router.get('/viajes', paginaViajes)
router.get('/opiniones', paginaOpiniones)


export default router;