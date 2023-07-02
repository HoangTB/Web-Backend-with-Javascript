const express = require("express");
const route = express.Router();
const blogController = require("../controller/blog.controller");
route
  .route("/")
  .post(blogController.postAllBlog)
  .get(blogController.getAllBlog);
module.exports = route;
