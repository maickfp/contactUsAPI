// importar mongoose
const mongoose = require('mongoose');

const data = {
    host: 'clustermakeitreal01-ytign.mongodb.net',
    name: 'contactus_db',
    user: {
        name: 'admin_user',
        pass: 'B4Hn4jMvbgMz2quT'
    }
}

const connect = () => {
    mongoose.connect(`mongodb+srv://${data.user.name}:${data.user.pass}@${data.host}/${data.name}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connect;