const response = require("./response");

const errors = (err, req, res, next) => {
    console.error("[error]", err);

    const msg = err.message || "Internal Server Error";
    const status = err.statusCode || 500;

    response.error(req, res, msg, status);
};

module.exports = errors;
