import express from 'express';
import { paginaDetalleViaje, paginaInicio, paginaNosotros, paginaOpiniones, paginaViajes } from '../controllers/paginasController.js';

import {
    guardarOpinion
} from '../controllers/opinionController.js'

const router = express.Router();

router.get('/', paginaInicio)
router.get('/nosotros', paginaNosotros)
router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje) //los dos puntos es un comodín
router.get('/opiniones', paginaOpiniones)
router.post('/opiniones', guardarOpinion)



export default router;