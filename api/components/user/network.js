const express = require("express");
const Controller = require("./index");
const response = require("../../../network/response");
const router = express.Router();

router.get("/", (req, res) => {
    Controller.list()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.get("/:id", (req, res) => {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.post("/", (req, res) => {
    Controller.addUser(req.body)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.delete("/:id", (req, res) => {
    Controller.deleteUser(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

module.exports = router;
