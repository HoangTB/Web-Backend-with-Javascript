const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("../src/routes/use.router");
const blogRouter = require("./routes/blog.router");
// const sql = require("./db/db.connect.user");
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/blog", blogRouter);
const port = 3000;
const host = "127.0.0.1";
app.listen(port, host, () => {
  console.log(`http://${host}:${port}`);
});
