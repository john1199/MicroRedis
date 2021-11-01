const TABLA = "post";

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require("../../../store/dummy");
    }

    const listPost = () => {
        return store.list(TABLA);
    };

    return {
        listPost,
    };
};
