const express = require('express');

const Restaurantes = require('../controllers/restaurante.controller');

const router = express.Router();

router.get('/', Restaurantes.listaRestaurantes);
router.get('/reservas', Restaurantes.listaReservas);
router.get('/ciudad', Restaurantes.filtroCiudad);
router.get('/letra', Restaurantes.filtroLetra);
router.post('/', Restaurantes.nuevoRestaurante);
router.post('/reservas', Restaurantes.hacerReserva);
router.put('/editar/:id', Restaurantes.editar)
router.delete('/eliminar/:id', Restaurantes.eliminar);

module.exports = router;