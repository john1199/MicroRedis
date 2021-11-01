//const store = require("../../../store/database");
const store = require("../../../store/remote-mysql");
const controller = require("./controller");

//inyectamos el store al controlador 
module.exports = controller(store);