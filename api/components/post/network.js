const express = require("express");
const Controller = require("./index");
const response = require("../../../network/response");
const router = express.Router();

router.get("/", (req, res, next) => {
    Controller.listPost()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(next);
});
//add post
//edit post
//delete post
module.exports = router;