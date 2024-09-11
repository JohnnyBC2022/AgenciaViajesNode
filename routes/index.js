import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { // req - lo que enviamos, res - lo que express nos responde
    res.render('inicio', {
        pagina: 'Inicio'
    })
})
router.get('/nosotros', (req, res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    })
})
router.get('/viajes', (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    })
})

router.get('/opiniones', (req, res) => {
    res.render('opiniones', {
        pagina: 'Opiniones'
    })
})


export default router;