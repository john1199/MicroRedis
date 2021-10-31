const express = require("express");
const Controller = require("./index");
const response = require("../../../network/response");
const authMiddleware = require("./secure");

const router = express.Router();

router.get("/", (req, res, next) => {
    Controller.listUser()
        .then((list) => {
            response.success(req, res, list, 200);
        })
        .catch(next());
});

router.get("/:id", (req, res, next) => {
    Controller.getUser(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next);
});

router.post("/", (req, res) => {
    Controller.addUser(req.body)
        .then(() => {
            response.success(req, res, req.body, 200);
        })
        .catch((err) => {
            response.error(req, res, err.message, 500);
        });
});

router.put("/", authMiddleware("update"), (req, res) => {
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
