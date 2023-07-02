const sql = require("../db/db.connect.user");
const blogs = require("../db/blogs.json");

const modelPostAllBlog = (req, res) => {
  const insertBlogsQuery = `
    INSERT INTO blogs (id, title, body, userId)
    VALUES (?, ?, ?, ?)
  `;
  blogs.forEach((blog) => {
    const blogValues = [blog.id, blog.title, blog.body, blog.userId];
    sql.query(insertBlogsQuery, blogValues, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Failed to insert blogs" });
      }
    });
  });
  console.log("Users data inserted successfully");
  res.status(200).json({ message: "Users data inserted successfully" });
};

const modelGetAllBlog = (req, res) => {
  const selectedBlog = `select * from blogs`;
  sql.query(selectedBlog, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Failed to select blog" });
    }
    res.status(200).json(result);
  });
};

module.exports = { modelPostAllBlog, modelGetAllBlog };
