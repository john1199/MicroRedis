
const store = require("../../../store/database");
const controller = require("./controller");

//inyectamos el store al controlador 
module.exports = controller(store);