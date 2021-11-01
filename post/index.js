const express = require("express");
const config = require("../config");
const post = require("./components/post/network");
const errors = require("../network/errors");

const app = express();
app.use(express.json());

//routes
app.use("/api/post", post);

app.use(errors);

app.listen(config.post.port, () => {
    console.log("Server posts is running on port ", config.post.port);
});
