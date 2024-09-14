import { Opinion } from '../models/Opinion.js';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const guardarOpinion = async (req, res) => {
    const { nombre, email, mensaje } = req.body

    const errores = []

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El nombre está vacío' })
    }
    if (email.trim() === '') {
        errores.push({ mensaje: 'El correo electrónico está vacío' });
    } else if (!emailRegex.test(email)) {
        errores.push({ mensaje: 'El correo electrónico no es válido' });
    }
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El mensaje está vacío' })
    }

    if (errores.length > 0) {
        // Mostrar opiniones anteriores
        const opiniones = await Opinion.findAll();

        // Mostrar la vista con errores
        return res.render('opiniones', {
            pagina: 'opiniones',
            errores,
            nombre,
            email,
            mensaje,
            opiniones
        })


    }
    //Almacenarlo en la base de datos
    try {
        await Opinion.create({
            nombre,
            email,
            mensaje
        });
        // Redirecciona después de guardar correctamente
        res.redirect('/opiniones')
    } catch (error) {
        console.log(error)
    }
}

export {
    guardarOpinion
}