// importar express
const express = require('express');

const router = express.Router();

// API
const messages = require('./routes/message');

// Rutas
router.use('/messages', messages);

module.exports = router;