// const express = require('express'); es la notación antigua de commonJS
import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir el puerto
const port = process.env.PORT || 4000;

// Agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`)
})