// importar express
const express = require('express');

// importar servicio Message
const messageSerice = require('./../../services/message');

const router = express.Router();

// Rutas
router.route('/')
    // Listar mensajes
    .get((req, res, next) => {
        messageSerice.listMessages((resp) => {
            res.status(200).send(resp);
            next();
        });
    })
    // Crear mensaje
    .post((req, res, next) => {
        const data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            text: req.body.text
        };
        messageSerice.createMessage(data, (resp) => {
            res.status(200).send(resp);
            next();
        })
    });

module.exports = router;