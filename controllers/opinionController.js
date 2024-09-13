const guardarOpinion = (req,res)=>{
    const { nombre, email, mensaje} = req.body

    const errores = []

    if(nombre.trim()===''){
        errores.push({mensaje: 'El nombre está vacío'})
    }
    if(email.trim()===''){
        errores.push({mensaje: 'El correo electrónico está vacío'})
    }
    if(mensaje.trim()===''){
        errores.push({mensaje: 'El mensaje está vacío'})
    }

    if(errores.length > 0) {
        // Mostrar la vista con errores
        res.render('opiniones', {
            pagina: 'opiniones',
            errores,
            nombre,
            email,
            mensaje
        })
    } else {
        //Almacenarlo en la base de datos
        
    }

}

export {
    guardarOpinion
}