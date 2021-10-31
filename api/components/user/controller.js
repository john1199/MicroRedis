const TABLA = "user";
const { nanoid } = require("nanoid");
const auth = require("../auth");

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
    const addUser = async (data) => {
        const user = {
            id: data.id ? data.id : nanoid(),
            name: data.name,
            username: data.username,
        };
        if (data.password || data.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: data.password,
            });
        }
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
