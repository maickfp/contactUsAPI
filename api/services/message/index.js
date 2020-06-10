// importar mongoose
const mongoose = require('mongoose');
// importar moment
const moment = require('moment');
// importar modelo Message
const Message = require('./../../models/message');

// Listar mensajes
const listMessages = (next) => {
    Message.find((err, messages) => {
        if(err || messages === null){
            next({
                est: 2,
                msg: `Error listando mensajes. ${err}`
            })
        }else{
            next({
                est: 1,
                msg: `OK`,
                messages: messages.map((message) => {
                    return {
                        id: message._id,
                        name: message.name,
                        email: message.email,
                        phone: message.phone,
                        country: message.country,
                        text: message.text,
                        createdAt: moment(message.createdAt).format('DD/MM/YYYY hh:mm:ss A')
                    };
                })
            })
        }
    });
}

// Crear mensajes
const createMessage = (message= {name:undefined, email:undefined, phone:undefined, country:undefined, text:undefined}, next) => {

    if(message.name === undefined || message.name.trim() === ''){
        next({
            est: 2,
            msg: `El Nombre es obligatorio`
        })
        return;
    }

    if(message.email === undefined || message.email.trim() === ''){
        next({
            est: 2,
            msg: `El Correo es obligatorio`
        })
        return;
    }

    if(message.text === undefined || message.text.trim() === ''){
        next({
            est: 2,
            msg: `El Mensaje es obligatorio`
        })
        return;
    }

    Message.create(message, (err, newMessage) => {
        if(err || newMessage === null){
            next({
                est: 2,
                msg: `Error creando mensaje. ${err}`
            })
        }else{
            next({
                est: 1,
                msg: `OK`,
                id: newMessage._id
            })
        }
    });
};

module.exports = {listMessages, createMessage};