const express = require("express");
const path = require("path");
const fs = require("fs");
const route = express.Router();
const detailPath = path.join(__dirname, "../public/question-detail.html");
route.get("/", (req, res) => {
  res.status(200).sendFile(detailPath);
});
module.exports = route;
