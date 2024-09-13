// const express = require('express'); es la notación antigua de commonJS
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() => (console.log('Base de datos conectada')))
    .catch(error => console.log(error))

// Definir el puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug')

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next(); // Al poner return fuerzas a que ejecute el siguiente Middleware
})

// Agregar body parser (para poder leer la información del formulario). Es importante que la información esté registrada antes que las rutas. Recuerda que el middleware se ejecuta de forma secuencial
app.use(express.urlencoded({extended: true}));

// Definir la carpeta pública
app.use(express.static('public'));

// Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`)
})

