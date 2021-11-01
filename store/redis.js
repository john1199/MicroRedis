//REDIS
const redis = require("redis");
const config = require("../config");

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
});

const list = (table) => {
    return new Promise((resolve, reject) => {
        client.get(table, (err, data) => {
            if (err) reject(err);
            if (data) resolve(JSON.parse(data));
            else resolve(null);
        });
    });
};

const get = (table) => {};

const update = async (table, data) => {
    console.log(data);
    let key = table;
    if (data && data.id) {
        key = key + data.id;
    }
    client.setex(key, 10, JSON.stringify(data), (err, reply) => {
        if (err) console.log(err);
        return true;
    });
};

module.exports = {
    list,
    get,
    update,
};
