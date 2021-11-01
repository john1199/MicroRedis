const dotenv = require('dotenv').config();

module.exports = {
    api: {
        port: process.env.PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || "",
    },
    mysql: {
        host: process.env.MYSQL_HOST || "",
        user: process.env.MYSQL_USER || "",
        password: process.env.MYSQL_PASSWORD || "",
        database: process.env.MYSQL_DATABASE || "",
    },
    mysqlService: {
        port: process.env.MYSQL_SERVICE_PORT || 3001,
        host: process.env.MYSQL_SERVICE_HOST || "localhost",
    },
    cacheService: {
        port: process.env.CACHE_SERVICE_PORT || 3003,
        host: process.env.CACHE_SERVICE_HOST || "localhost",
        password: process.env.CACHE_SERVICE_PASSWORD || "",
    },
    redis :{
        host: process.env.REDIS_HOST || "",
        port: process.env.REDIS_PORT || "",
        password: process.env.REDIS_PASSWORD || "",
    },
    post: {
        port: process.env.POST_PORT || 3002,
    },
    remoteDB: process.env.REMOTE_DB || false,
};
