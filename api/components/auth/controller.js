const TABLA = "auth";
const bcrypt = require("bcryptjs");
const auth = require("../../../auth");

module.exports = (injectedStore) => {
    let store = injectedStore;
    if (!store) {
        store = require("../../../store/dummy");
    }

    const login = async (username, password) => {
        const data = await store.query(TABLA, { username: username });
        if (decodePassword(password, data.password)) {
            //Generar token
            return auth.sign(JSON.stringify(data));
        } else {
            throw new Error("Usuario o contraseña incorrectos");
        }
    };

    const upsert = async (data) => {
        const authData = {
            id: data.id,
        };
        if (data.username) {
            authData.username = data.username;
        }
        if (data.password) {
            authData.password = await encodePassword(data.password);
        }
        return store.insert(TABLA, authData);
    };

    const encodePassword = async (password) => {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    };

    const decodePassword = async (password, passwordEncoded) => {
        return bcrypt.compare(password, passwordEncoded);
    };

    return {
        upsert,
        login,
    };
};
