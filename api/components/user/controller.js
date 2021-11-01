const TABLA = "user";
const { nanoid } = require("nanoid");
const auth = require("../auth");

module.exports = (injectedStore, injectedCache) => {
    let cache = injectedCache;
    let store = injectedStore;
    if (!store) {
        store = require("../../../store/dummy");
    }
    if (!cache) {
        cache = require("../../../cache/dummy");
    }

    const listUser = async () => {
        let users = await cache.list(TABLA);
        if (!users) {
            users = await store.list(TABLA);
            cache.update(TABLA, users);
        }
        return users;
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
        return store.insert(TABLA, user);
    };
    const deleteUser = (id) => {
        return store.remove(TABLA, id);
    };

    const follow = (from, to) => {
        return store.insert(TABLA + "_follow", {
            user_from: from,
            user_to: to,
        });
    };
    async function following(user) {
        const join = {};
        join[TABLA] = "user_to"; // { user: 'user_to' }
        const query = { user_from: user };

        return  store.query(TABLA + "_follow", query, join);
    }
    return {
        listUser,
        getUser,
        addUser,
        deleteUser,
        follow,
        following,
    };
};
