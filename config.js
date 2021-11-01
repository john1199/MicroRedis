module.exports = {
    api: {
        port: process.env.PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || "secret",
    },
    mysql: {
        host: process.env.MYSQL_HOST || "remotemysql.com",
        user: process.env.MYSQL_USER || "SAA87moqAy",
        password: process.env.MYSQL_PASSWORD || "JHtH7C0UJN",
        database: process.env.MYSQL_DATABASE || "SAA87moqAy",
    },
    mysqlService: {
        port: process.env.MYSQL_SERVICE_PORT || 3001,
        host: process.env.MYSQL_SERVICE_HOST || "localhost",
    },
};
