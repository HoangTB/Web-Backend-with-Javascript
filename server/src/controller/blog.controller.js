const blogModel = require("../models/blog.model");
const postAllBlog = (req, res) => {
  blogModel.modelPostAllBlog(req, res);
};
const getAllBlog = (req, res) => {
  blogModel.modelGetAllBlog(req, res);
};

module.exports = { postAllBlog, getAllBlog };
