const auth = require("../../../auth");

const checkAuth = (action) => {
    return (req, res, next) => {
        switch (action) {
            case "update":
                const owner = req.body.id;
                auth.check.own(req, owner);
                next();
                break;
            default:
                next();
        }
    };
};

module.exports = checkAuth;
