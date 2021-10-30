const TABLA = "user";
const { nanoid } = require("nanoid");
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
        const user = {
            id: data.id ? data.id : nanoid(),
            name: data.name,
        };
        return store.upsert(TABLA, user);
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
