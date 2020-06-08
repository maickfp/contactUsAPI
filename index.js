// importar express
const express = require('express');
// importar nocache
const nocache = require('nocache');

// importar config
const config = require('./config');
// importar log
const log = require('./api/utils/log');

// Variables
const app = express();

// Configuraciones
// json parser
app.use(express.json());
// deshabilitar cache
app.use(nocache());
// publicar contenido static
app.use(express.static('./public'));

// Iniciar servidor
app.listen(config.port, () => {
    log.info(`Servidio iniciado. Acceder a ruta http://localhost${config.port==80?'':`:${config.port}`}/`, '/')
});