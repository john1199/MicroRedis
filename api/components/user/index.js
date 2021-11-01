const config = require("../../../config");

var store, cache;
if (config.remoteDB) {
    store = require("../../../store/remote-mysql");
    cache = require("../../../store/remote-cache");
} else {
    store = require("../../../store/database");
    cache = require("../../../store/redis");
}
const controller = require("./controller");

//inyectamos el store al controlador
module.exports = controller(store, cache);
