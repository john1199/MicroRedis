const db = {
    user: [{ id: 1, name: "Carlos" }],
};

const list = (table) => {
    return db[table] || [];
};

const get = (table, id) => {
    const collection = list(table);
    return collection.filter((item) => item.id === id)[0] || null;
};

const upsert = (table, id, data) => {
    db[collection].push(data);
};

const remove = (table, id) => {
    return true;
};

module.exports = {
    list,
    get,
    upsert,
    remove,
};
