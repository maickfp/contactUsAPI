// importar mongoose
const mongoose = require('mongoose');

const data = {
    host: '127.0.0.1',
    port: '27017',
    name: 'contactus_db'
}

const connect = () => {
    mongoose.connect(`mongodb://${data.host}:${data.port}/${data.name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connect;