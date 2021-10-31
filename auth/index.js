const jwt = require("jsonwebtoken");
const config = require("../config");
const error = require("../utils/error");
const secret = config.jwt.secret;

const sign = (data) => {
    return jwt.sign(data, secret);
};

const verify = (token) => {
    return jwt.verify(token, secret);
};

const check = {
    own: (req, owner) => {
        const decoode = decodeHeader(req);
        //comprobar si es el propietario
        if (decoode.id !== owner) {
            throw error("No tienes permisos para realizar esta acción", 401);
        }
    },
};

const getToken = (auth) => {
    if (!auth) {
        throw new Error("No token provided");
    }
    if (auth.indexOf("Bearer ") === -1) {
        throw new Error("Invalid token");
    }
    //token
    return auth.replace("Bearer ", "");
};

const decodeHeader = (req) => {
    const authorization = req.headers.authorization || "";
    const token = getToken(authorization);
    const decoded = verify(token);
    req.user = decoded;
    return decoded;
};

module.exports = {
    sign,
    check,
};
