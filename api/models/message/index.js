// importar mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Message = mongoose.model('messages', messageSchema);

module.exports = Message;