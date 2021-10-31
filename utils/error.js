const err = (msg, code) => {
    const e = new Error(msg);
    if (code) {
        e.statusCode = code;
    }
    return e;
};

module.exports = err;
