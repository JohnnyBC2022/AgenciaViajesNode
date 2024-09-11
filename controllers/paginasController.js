import {Viaje} from '../models/Viaje.js'

const paginaInicio = (req, res) => { // req - lo que enviamos, res - lo que express nos responde
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) => {
    // Consultar BD
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Viajes'
    })
}

const paginaOpiniones = (req, res) => {
    res.render('opiniones', {
        pagina: 'Opiniones'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaOpiniones
}