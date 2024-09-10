// const express = require('express'); es la notación antigua de commonJS
import express from 'express';

const app = express();

// Definir el puerto
const port = process.env.PORT || 4000;

app.get('/', (req, res) => { // req - lo que enviamos, res - lo que express nos responde
    res.send('Inicio')
})
app.get('/nosotros', (req, res) => {
    res.send('Nosotros')
})
app.get('/contacto', (req, res) => {
    res.send('Contacto')
})

app.listen(port, () => {
    console.log(`El Servidor está funcionando en el puerto ${port}`)
})