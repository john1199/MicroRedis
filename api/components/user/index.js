const config = require("../../../config");
var store;
if (config.remoteDB) {
    store = require("../../../store/remote-mysql");
} else {
    store = require("../../../store/database");
}
const controller = require("./controller");

//inyectamos el store al controlador
module.exports = controller(store);
