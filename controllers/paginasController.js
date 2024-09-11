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
        pagina: 'Próximos Viajes',
        viajes
    })
}

const paginaOpiniones = (req, res) => {
    res.render('opiniones', {
        pagina: 'Opiniones'
    })
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) =>{
    const { slug} = req.params;

    try{
        const viaje = await Viaje.findOne({where: {slug}});

        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })
    } catch(error){
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