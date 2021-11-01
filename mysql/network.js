const express = require("express");
const Controller = require("./index");
const response = require("../network/response");
const Store = require("../store/database");
const router = express.Router();

router.get("/:table", async (req, res, next) => {
    const datos = await Store.list(req.params.table);
    response.success(req, res, datos, 200);
});

router.get("/:table/:id", async (req, res, next) => {
    const datos = await Store.get(req.params.table);
    response.success(req, res, datos, 200);
});

router.post("/:table", async (req, res, next) => {
    const datos = await Store.insert(req.params.table);
    response.success(req, res, datos, 200);
});

router.put("/:table", async (req, res, next) => {
    const datos = await Store.update(req.params.table);
    response.success(req, res, datos, 200);
});

module.exports = router;
