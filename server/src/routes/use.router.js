const express = require("express");
const route = express.Router();

const userController = require("../controller/user.controller");

route
  .route("/")
  .get(userController.getAllUser)
  .post(userController.postAllUser);

route.route("/:id").delete(userController.deleteUser);
module.exports = route;
