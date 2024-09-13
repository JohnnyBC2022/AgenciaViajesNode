import { Viaje } from '../models/Viaje.js'
import { Opinion } from '../models/Opinion.js'

const paginaInicio = (req, res) => { // req - lo que enviamos, res - lo que express nos responde
    res.render('inicio', {
        pagina: 'Inicio',
        clase: 'home'
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
        pagina: 'Próximos Viajes',
        viajes
    })
}

const paginaOpiniones = async (req, res) => {
    try {
        const opiniones = await Opinion.findAll();
        res.render('opiniones', {
            pagina: 'Opiniones',
            opiniones
        })
    } catch (error) {
        console.log(error)
    }

}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where: { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaOpiniones,
    paginaDetalleViaje
}