const express = require("express");
const config = require("../config");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const user = require("./components/user/network");

const app = express();
app.use(express.json());

//routes
app.use("/api/user", user);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(config.api.port, () => {
    console.log("Server is running on port ", config.api.port);
});
