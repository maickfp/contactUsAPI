// importar rotating-file-stream
const rfs = require('rotating-file-stream');
// importar moment
const moment = require('moment');

// stream para logger propio - aplicacion
const applicationLoggerStream = rfs.createStream("contactUs.log", {
    path: "./logs",
    initialRotation: true,
    size: "10M",
    interval: "1d"
});

const log = {
    info: (msg, path = "NONE") => {
        printLine(`INFO [${moment().format('YYYY/MM/DD hh:mm:ss A')} - ${path}]: ${msg}`);
    },
    warn: (msg, path = "NONE") => {
        printLine(`WARN [${moment().format('YYYY/MM/DD hh:mm:ss A')} - ${path}]: ${msg}`);
    },
    error: (msg, path = "NONE") => {
        printLine(`**ERROR** [${moment().format('YYYY/MM/DD hh:mm:ss A')} - ${path}]: ${msg}`);
    }
};

function printLine(line){
    applicationLoggerStream.write(`${line}\n`);
    console.log(`${line}`);
}

module.exports = log;