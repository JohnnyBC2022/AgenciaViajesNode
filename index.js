// const express = require('express'); es la notación antigua de commonJS
import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir el puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug')

// Obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next(); // Al poner return fuerzas a que ejecute el siguiente Middleware
})

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`)
})