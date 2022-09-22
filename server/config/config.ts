const config = {
    mongo: {
        options: {
            useUnifiedToplogy: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url: process.env.CONNECTION_URL
    },
    server: {
        host:"localhost",
        port:1337
    }
}

export default config;