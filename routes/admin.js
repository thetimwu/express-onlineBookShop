const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "view", "add-product.html"));
});

router.post("/product", (req, res, next) => {});

module.exports = router;
