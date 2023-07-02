const userModel = require("../models/user.model");
const postAllUser = (req, res) => {
  userModel.modelPostAllUsers(req, res);
};

const getAllUser = (req, res) => {
  userModel.modelGetAllUsers(req, res);
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  userModel.modelDeleteUsers(id, res);
};
module.exports = { postAllUser, getAllUser, deleteUser };
