const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const rutas = require('./routes/restaurantes.routes');

const app = express();

const swaggerOptions = require('./utils/swagger');

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

app.use(express.json());

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.use('/restaurantes', rutas);

app.listen(5000, () => { console.log('Escuchando en el puerto 5000') });