const mysql = require("mysql");

const config = require("../config");

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

//Connect to database
var connection;

const handleConnection = () => {
    connection = mysql.createConnection(dbconfig);
    connection.connect((err) => {
        if (err) {
            console.log(err);
            setTimeout(handleConnection, 2000);
        } else {
            console.log("Connected to database");
        }
    });
    connection.on("error", (err) => {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            handleConnection();
        } else {
            throw err;
        }
    });
};

handleConnection();

//Get all users
const list = (table) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
};
const get = (table, id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM ${table} where id=${id}`,
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
};

const insert = (table, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, [data], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const update = (table, data) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `UPDATE ${table} SET ? WHERE id=?`,
            [data, data.id],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
};

const upsert = (table, data) => {
    if (data && data.id) {
        return update(table, data);
    } else {
        return insert(table, data);
    }
};

const remove = (table, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

function query(table, query, join) {
    let joinQuery = '';
    if (join) {
        const key = Object.keys(join)[0];
        const val = join[key];
        joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
    }

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${table}.?`, query, (err, res) => {
            if (err) return reject(err);
            resolve(res[0] || null);
        })
    })
}

module.exports = {
    list,
    get,
    insert,
    update,
    remove,
    query,
};
