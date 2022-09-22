let mongoURI = require('./mongoURI.json');


const config = {
    mongo: {
        options: {
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            autoIndex: false,
            retryWrites: false
        },
        url: mongoURI.mongo_uri
    },
    server: {
        host:"localhost",
        port:1337
    }
}

export default config;