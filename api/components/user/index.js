const store = require("../../../store/dummy");
const controller = require("./controller");

//inyectamos el store al controlador 
module.exports = controller(store);