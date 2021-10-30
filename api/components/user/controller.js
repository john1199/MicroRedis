const TABLA = "user";
const store = require("../../../store/dummy");

const list = () => {
    return store.list(TABLA);
};

module.exports = {
    list,
};
