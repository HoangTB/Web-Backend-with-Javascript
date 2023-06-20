const express = require("express");
const app = express();
const questionQuestion = require("./routes/questions-route");
const port = 3000;
const local = "127.0.0.1";
const ask = require("./routes/ask-route");
const detail_route = require("./routes/detail-route");
app.use(express.urlencoded());
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).render("index");
});
app.use("/ask", ask);
app.use("/question-detail", detail_route);
app.use("/api/v1/questions", questionQuestion);

app.get("*", (req, res) => {
  res.status(200).send("Page not found");
});
app.listen(port, local, () => {
  console.log(`http://${local}:${port}`);
});
