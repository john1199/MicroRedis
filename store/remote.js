const request = require("request");

function createRemote(host, port) {
    const URL = `http://${host}:${port}`;

    const list = (table) => {
        return req("GET", table);
    };
    const get = (table) => {};
    const insert = (table) => {};
    const remove = (table) => {};
    const query = (table) => {};

    const req = (method, table, data) => {
        const url = `${URL}/${table}`;
        body = "";
        return new Promise((resolve, reject) => {
            request(
                {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    url,
                    body,
                },
                (err, res, body) => {
                    if (err) {
                        reject(err.message);
                    } else {
                        resolve(JSON.parse(body));
                    }
                }
            );
        });
    };

    return {
        list,
    };
}

module.exports = createRemote;
