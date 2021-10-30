const TABLA = "user";

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require("../../../store/dummy");
    }

    const listUser = () => {
        return store.list(TABLA);
    };

    const getUser = (id) => {
        return store.get(TABLA, id);
    };
    const addUser = (data) => {
        return store.upsert(TABLA, data);
    };
    const deleteUser = (id) => {
        return store.remove(TABLA, id);
    };

    return {
        listUser,
        getUser,
        addUser,
        deleteUser,
    };
};
