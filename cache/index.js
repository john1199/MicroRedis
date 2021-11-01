const express = require("express");
const router = require("./network");
const config = require("../config");

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(config.cacheService.port, () => {
    console.log(`cache server listening on port ${config.cacheService.port}`);
});
