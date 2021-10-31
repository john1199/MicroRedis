const db = {
    user: [{ id: "1", name: "Carlos", username: "carlos", password: "123" }],
};

const list = async (table) => {
    return db[table] || [];
};

const get = async (table, id) => {
    const collection = await list(table);
    return collection.filter((item) => item.id === id)[0] || null;
};

const upsert = async (table, data) => {
    if (!db[table]) {
        db[table] = [];
    }
    db[table].push(data);
};

const remove = async (table, id) => {
    return true;
};

const query = async (table, q) => {
    const collection = await list(table);
    const keys = Object.keys(q);
    const key = keys[0];
    return collection.filter((item) => item[key] === q[key])[0] || null;
};

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
};
