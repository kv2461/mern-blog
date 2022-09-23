import envProps from "./envProps";


const config = {
    mongo: {
        options: {
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            autoIndex: false,
            retryWrites: false
        },
        url: envProps.MONGO_URI
    },
    server: {
        host:"localhost",
        port:1337
    }
}

export default config;