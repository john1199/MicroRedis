const express = require("express");
const router = require("./network");
const config = require("../config");

const app = express();
app.set("port", config.mysqlService.port);

app.use(express.json());

app.use("/", router);

app.listen(app.get("port"), () => {
    console.log(`mysql listening on port ${config.mysqlService.port}`);
});
